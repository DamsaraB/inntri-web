export class ApiError extends Error {
  status: number;
  body: unknown;

  constructor(message: string, status: number, body?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.body = body;
  }
}

type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: unknown;
};

/**
 * Lightweight HTTP client for public gateway endpoints.
 * No secrets or auth tokens are stored here.
 */
export async function apiClient<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> {
  const { body, headers, ...rest } = options;

  let response: Response;

  try {
    response = await fetch(url, {
      ...rest,
      headers: {
        Accept: 'application/json',
        ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
        ...headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError(
      'Network error. Please check your connection and try again.',
      0
    );
  }

  let parsed: unknown = null;
  const text = await response.text();
  if (text) {
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = text;
    }
  }

  if (!response.ok) {
    const message = extractErrorMessage(parsed, response.status);
    throw new ApiError(message, response.status, parsed);
  }

  return parsed as T;
}

function extractErrorMessage(body: unknown, status: number): string {
  if (body && typeof body === 'object') {
    const record = body as Record<string, unknown>;

    const topLevel = [record.message, record.error, record.title, record.detail];
    for (const candidate of topLevel) {
      if (typeof candidate === 'string' && candidate.trim()) {
        return candidate.trim();
      }
    }

    const failures = record.validationFailures;
    if (Array.isArray(failures) && failures.length > 0) {
      const messages = failures
        .map((item) => {
          if (!item || typeof item !== 'object') return null;
          const failure = item as Record<string, unknown>;
          return typeof failure.message === 'string' ? failure.message.trim() : null;
        })
        .filter((message): message is string => Boolean(message));

      if (messages.length > 0) {
        return messages.join(' ');
      }
    }
  }

  if (status === 400) return 'Validation error. Please check your information.';
  if (status === 401 || status === 403) {
    return 'Unable to complete this request. Please try again later.';
  }
  if (status === 404) return 'The requested resource was not found.';
  if (status === 409) return 'This company information is already registered.';
  if (status >= 500) return 'Server error. Please try again later.';

  return 'Something went wrong. Please try again.';
}
