'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StepIndicator from '@/components/registration/StepIndicator';
import CompanyDetails from '@/components/registration/CompanyDetails';
import ModuleSelection from '@/components/registration/ModuleSelection';
import RegistrationSuccess from '@/components/registration/RegistrationSuccess';
import RegistrationError from '@/components/registration/RegistrationError';
import {
  getRegisteredModules,
  getRegistrationErrorMessage,
  getRegistrationFieldErrors,
  hasRegistrationFieldErrors,
  registerCompany,
  type RegisteredModule,
} from '@/services/companyRegistrationService';
import {
  buildRegisteredModulesPayload,
  getModuleDisplayName,
  validateCompanyDetails,
  validateModuleSelection,
  type CompanyRegistrationFormData,
  type FieldErrors,
} from '@/lib/companyRegistrationValidation';

type ViewState = 'form' | 'success' | 'error';

const INITIAL_FORM: CompanyRegistrationFormData = {
  name: '',
  code: '',
  email: '',
  primaryModuleId: null,
  additionalModuleIds: [],
};

const MUTU_SIGN_IN_URL =
  process.env.NEXT_PUBLIC_MUTU_SIGN_IN_URL ?? 'https://uat.mutu.solutions';

export default function CompanyRegistrationPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [view, setView] = useState<ViewState>('form');
  const [formData, setFormData] = useState<CompanyRegistrationFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [modules, setModules] = useState<RegisteredModule[]>([]);
  const [modulesLoading, setModulesLoading] = useState(true);
  const [modulesError, setModulesError] = useState<string | null>(null);

  const loadModules = useCallback(async () => {
    setModulesLoading(true);
    setModulesError(null);

    try {
      const data = await getRegisteredModules();
      setModules(data);
      if (data.length === 0) {
        setModulesError(
          'No MUTU services are currently available. Please try again later.'
        );
      }
    } catch (error) {
      setModules([]);
      setModulesError(getRegistrationErrorMessage(error));
    } finally {
      setModulesLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadModules();
  }, [loadModules]);

  const handleFieldChange = <K extends keyof CompanyRegistrationFormData>(
    field: K,
    value: CompanyRegistrationFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSubmitError('');
    setErrors((prev) => {
      if (!prev[field as keyof FieldErrors]) return prev;
      const next = { ...prev };
      delete next[field as keyof FieldErrors];
      return next;
    });
  };

  const handleSetPrimary = (moduleId: number) => {
    setSubmitError('');
    setFormData((prev) => {
      if (prev.primaryModuleId === moduleId) return prev;

      const nextAdditional = prev.additionalModuleIds.filter((id) => id !== moduleId);
      if (prev.primaryModuleId !== null) {
        nextAdditional.unshift(prev.primaryModuleId);
      }

      return {
        ...prev,
        primaryModuleId: moduleId,
        additionalModuleIds: nextAdditional.filter(
          (id, index, list) => list.indexOf(id) === index
        ),
      };
    });
    setErrors((prev) => {
      if (!prev.primaryModuleId) return prev;
      const next = { ...prev };
      delete next.primaryModuleId;
      return next;
    });
  };

  const handleToggleModule = (moduleId: number) => {
    setSubmitError('');
    setFormData((prev) => {
      if (prev.primaryModuleId === moduleId) {
        const [nextPrimary, ...rest] = prev.additionalModuleIds;
        return {
          ...prev,
          primaryModuleId: nextPrimary ?? null,
          additionalModuleIds: rest,
        };
      }

      if (prev.additionalModuleIds.includes(moduleId)) {
        return {
          ...prev,
          additionalModuleIds: prev.additionalModuleIds.filter(
            (id) => id !== moduleId
          ),
        };
      }

      if (prev.primaryModuleId === null) {
        return {
          ...prev,
          primaryModuleId: moduleId,
        };
      }

      return {
        ...prev,
        additionalModuleIds: [...prev.additionalModuleIds, moduleId],
      };
    });
    setErrors((prev) => {
      if (!prev.primaryModuleId) return prev;
      const next = { ...prev };
      delete next.primaryModuleId;
      return next;
    });
  };

  const handleContinue = () => {
    const nextErrors = validateCompanyDetails(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStep(2);
  };

  const handleRegister = async () => {
    if (isSubmitting) return;

    const moduleErrors = validateModuleSelection(formData.primaryModuleId);
    setErrors((prev) => ({ ...prev, ...moduleErrors }));
    if (Object.keys(moduleErrors).length > 0) return;

    const detailErrors = validateCompanyDetails(formData);
    if (Object.keys(detailErrors).length > 0) {
      setErrors(detailErrors);
      setStep(1);
      return;
    }

    const primaryModuleId = formData.primaryModuleId;
    if (primaryModuleId === null) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await registerCompany({
        name: formData.name.trim(),
        code: formData.code.trim().toUpperCase(),
        email: formData.email.trim(),
        initialUser: true,
        registeredModules: buildRegisteredModulesPayload(
          primaryModuleId,
          formData.additionalModuleIds
        ),
        isUserInvited: true,
      });

      setView('success');
    } catch (error) {
      const fieldErrors = getRegistrationFieldErrors(error);
      const backendMessage = getRegistrationErrorMessage(error);

      if (hasRegistrationFieldErrors(fieldErrors)) {
        setErrors((prev) => ({ ...prev, ...fieldErrors }));
        setSubmitError(backendMessage);
        setView('form');

        if (fieldErrors.primaryModuleId && !fieldErrors.name && !fieldErrors.code && !fieldErrors.email) {
          setStep(2);
        } else {
          setStep(1);
        }
      } else {
        setSubmitError(backendMessage);
        setView('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTryAgain = () => {
    setView('form');
    setSubmitError('');
    setStep(2);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setSubmitError('');
    setStep(1);
    setView('form');
  };

  const primaryModule = modules.find((m) => m.id === formData.primaryModuleId);
  const primaryServiceName = primaryModule
    ? getModuleDisplayName(primaryModule.name)
    : 'MUTU Service';
  const additionalServiceNames = formData.additionalModuleIds
    .map((id) => modules.find((m) => m.id === id))
    .filter((m): m is RegisteredModule => Boolean(m))
    .map((m) => getModuleDisplayName(m.name));

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-28 sm:pt-32 pb-16 relative overflow-hidden min-h-[calc(100vh-5rem)]">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-cyan-400 font-semibold tracking-[0.2em] text-sm mb-3"
            >
              MUTU
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-3"
            >
              Create Your Company Account
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-base sm:text-lg"
            >
              Start using MUTU solutions for your business
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`mx-auto ${step === 2 && view === 'form' ? 'max-w-5xl' : 'max-w-2xl'}`}
          >
            <div className="glass-card glass-card-hover p-6 sm:p-8 md:p-10 card-3d">
              <AnimatePresence mode="wait">
                {view === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <RegistrationSuccess
                      companyName={formData.name.trim()}
                      primaryServiceName={primaryServiceName}
                      additionalServiceNames={additionalServiceNames}
                      email={formData.email.trim()}
                      onContinue={handleReset}
                    />
                  </motion.div>
                ) : view === 'error' ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <RegistrationError
                      message={submitError}
                      onTryAgain={handleTryAgain}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <StepIndicator currentStep={step} />

                    {submitError ? (
                      <div
                        className="mb-6 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-left"
                        role="alert"
                      >
                        <p className="text-sm font-medium text-red-300">{submitError}</p>
                      </div>
                    ) : null}

                    <AnimatePresence mode="wait">
                      {step === 1 ? (
                        <motion.div
                          key="step-1"
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 16 }}
                          transition={{ duration: 0.25 }}
                        >
                          <CompanyDetails
                            formData={formData}
                            errors={errors}
                            onChange={handleFieldChange}
                            onContinue={handleContinue}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="step-2"
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ModuleSelection
                            modules={modules}
                            modulesLoading={modulesLoading}
                            modulesError={modulesError}
                            primaryModuleId={formData.primaryModuleId}
                            additionalModuleIds={formData.additionalModuleIds}
                            selectionError={errors.primaryModuleId}
                            isSubmitting={isSubmitting}
                            onToggleModule={handleToggleModule}
                            onSetPrimary={handleSetPrimary}
                            onBack={() => setStep(1)}
                            onSubmit={handleRegister}
                            onRetryModules={loadModules}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {view === 'form' ? (
              <p className="mt-8 text-center text-sm text-gray-400">
                Already registered?{' '}
                <a
                  href={MUTU_SIGN_IN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Sign In
                </a>
                {' · '}
                <Link
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Need help?
                </Link>
              </p>
            ) : null}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
