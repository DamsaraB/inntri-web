# Static build & Nginx deployment

This app is built as a **static export** (no Node.js on the server). Nginx serves the files from the `dist` folder.

## Build

```bash
npm install
npm run build
```

Output is in the **`dist`** folder. Upload the **entire contents** of `dist` to your server (e.g. `/var/www/your-site` or `/usr/share/nginx/html`).

## Nginx configuration

Use a server block like this (adjust `server_name` and `root`):

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    root /var/www/your-site;   # path where you uploaded the contents of dist/
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    # Cache static assets
    location /_next/static {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Optional: redirect HTTP to HTTPS (uncomment when you have SSL)
    # return 301 https://$server_name$request_uri;
}
```

For HTTPS (recommended in production):

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com www.your-domain.com;
    root /var/www/your-site;
    index index.html;

    ssl_certificate     /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;

    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    location /_next/static {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

## Deploy steps (summary)

1. On your machine: `npm run build`
2. Copy everything inside the **`dist`** folder to the server (e.g. with `scp`, `rsync`, or FTP)
3. Point Nginx `root` to that folder and reload Nginx: `sudo nginx -t && sudo systemctl reload nginx`

No Node.js or `npm run start` is required on the server.
