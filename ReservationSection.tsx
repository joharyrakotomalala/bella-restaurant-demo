import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, Info, RotateCcw } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ReservationSectionProps {
  language: Language;
  suggestedDishNote: string;
  onClearSuggestedDishNote: () => void;
}

interface ReservationFormData {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  note: string;
}

type ErrorKey = keyof typeof TRANSLATIONS.fr.reservation.errors;

interface FormErrors {
  fullName?: ErrorKey;
  phone?: ErrorKey;
  date?: ErrorKey;
  time?: ErrorKey;
  guests?: ErrorKey;
}

const TIME_SLOTS = [
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
];

function getTodayIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function ReservationSection({
  language,
  suggestedDishNote,
  onClearSuggestedDishNote,
}: ReservationSectionProps) {
  const todayIso = getTodayIsoDate();
  const t = TRANSLATIONS[language].reservation;

  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    phone: '',
    date: todayIso,
    time: '20:00',
    guests: '2',
    note: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedBooking, setSubmittedBooking] = useState<ReservationFormData | null>(null);

  useEffect(() => {
    if (suggestedDishNote) {
      setFormData((prev) => ({
        ...prev,
        note: `${t.dishNotePrefix} ${suggestedDishNote}`,
      }));
      setSubmittedBooking(null);
    }
  }, [suggestedDishNote, t.dishNotePrefix]);

  const validate = (data: ReservationFormData): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!data.fullName.trim() || data.fullName.trim().length < 2) {
      nextErrors.fullName = 'fullName';
    }

    const digitsOnly = data.phone.replace(/\D/g, '');
    if (digitsOnly.length < 8) {
      nextErrors.phone = 'phone';
    }

    if (!data.date) {
      nextErrors.date = 'dateRequired';
    } else if (data.date < todayIso) {
      nextErrors.date = 'datePast';
    }

    if (!data.time) {
      nextErrors.time = 'time';
    }

    if (!data.guests) {
      nextErrors.guests = 'guests';
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedBooking({ ...formData });
      onClearSuggestedDishNote();
    }
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setErrors({});
    setFormData({
      fullName: '',
      phone: '',
      date: todayIso,
      time: '20:00',
      guests: '2',
      note: '',
    });
    onClearSuggestedDishNote();
  };

  const formatLocalizedDate = (isoDate: string): string => {
    if (!isoDate) return '';
    const [year, month, day] = isoDate.split('-').map(Number);
    const dateObj = new Date(year, month - 1, day);
    return new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(dateObj);
  };

  const getGuestLabel = (guestValue: string): string => {
    return t.guestOptions.find((opt) => opt.value === guestValue)?.label ?? guestValue;
  };

  return (
    <section
      id="reservation"
      className="py-20 sm:py-28 bg-[#F6F1E9] text-[#141210] border-t border-[#141210]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Reservation Context */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-wide text-[#8C6823]">{t.kicker}</p>
            <h2 className="mt-2 font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-[#141210] [text-wrap:balance]">
              {t.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#3E3832]">{t.intro}</p>

            <div className="mt-8 pt-6 border-t border-[#141210]/12 space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-[#141210]">{t.serviceTitle}</h3>
                <p className="mt-1 text-sm text-[#4F473F] tabular-nums">{t.serviceText}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#141210]">{t.groupsTitle}</h3>
                <p className="mt-1 text-sm text-[#4F473F]">{t.groupsText}</p>
              </div>

              <div className="p-4 rounded-lg bg-[#EAE1D3] border border-[#141210]/10 flex items-start gap-3">
                <Info className="w-5 h-5 text-[#8C6823] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm leading-relaxed text-[#3E3832]">
                  <strong className="font-semibold text-[#141210]">{t.demoBannerLabel}</strong>{' '}
                  {t.demoBannerText}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form or Demo Confirmation */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] border border-[#141210]/12 rounded-lg p-6 sm:p-10">
              {submittedBooking ? (
                <div role="status" aria-live="polite" className="space-y-6">
                  <div className="flex items-start gap-4 pb-6 border-b border-[#141210]/10">
                    <div className="w-11 h-11 rounded-md bg-[#141210] text-[#C69C4E] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#8C6823]">
                        {t.confirmationKicker}
                      </p>
                      <h3 className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-[#141210]">
                        {t.confirmationTitle}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#3E3832]">
                        {t.confirmationBodyPrefix} {submittedBooking.fullName}.{' '}
                        {t.confirmationBodySuffix}
                      </p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="p-3.5 rounded-md bg-[#F6F1E9] border border-[#141210]/8">
                      <dt className="text-xs font-medium text-[#5E544A]">{t.summaryName}</dt>
                      <dd className="mt-1 font-semibold text-[#141210]">
                        {submittedBooking.fullName}
                      </dd>
                    </div>
                    <div className="p-3.5 rounded-md bg-[#F6F1E9] border border-[#141210]/8">
                      <dt className="text-xs font-medium text-[#5E544A]">{t.summaryPhone}</dt>
                      <dd className="mt-1 font-semibold text-[#141210] tabular-nums">
                        {submittedBooking.phone}
                      </dd>
                    </div>
                    <div className="p-3.5 rounded-md bg-[#F6F1E9] border border-[#141210]/8">
                      <dt className="text-xs font-medium text-[#5E544A]">{t.summaryDateTime}</dt>
                      <dd className="mt-1 font-semibold text-[#141210] capitalize tabular-nums">
                        {formatLocalizedDate(submittedBooking.date)} {t.summaryAt}{' '}
                        {submittedBooking.time}
                      </dd>
                    </div>
                    <div className="p-3.5 rounded-md bg-[#F6F1E9] border border-[#141210]/8">
                      <dt className="text-xs font-medium text-[#5E544A]">{t.summaryGuests}</dt>
                      <dd className="mt-1 font-semibold text-[#141210] tabular-nums">
                        {getGuestLabel(submittedBooking.guests)}
                      </dd>
                    </div>
                  </dl>

                  {submittedBooking.note && (
                    <div className="p-3.5 rounded-md bg-[#F6F1E9] border border-[#141210]/8 text-sm">
                      <p className="text-xs font-medium text-[#5E544A]">{t.summaryNote}</p>
                      <p className="mt-1 text-[#141210]">{submittedBooking.note}</p>
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmittedBooking(null)}
                      className="min-h-[44px] px-5 py-2.5 text-sm font-semibold text-[#141210] bg-[#C69C4E] hover:bg-[#D7B26B] rounded-md transition-colors cursor-pointer"
                    >
                      {t.editButton}
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium text-[#3E3832] hover:text-[#141210] border border-[#141210]/20 rounded-md transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>{t.resetButton}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="res-name"
                        className="block text-sm font-medium text-[#141210] mb-1.5"
                      >
                        {t.nameLabel} <span className="text-[#8C6823]">*</span>
                      </label>
                      <input
                        id="res-name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, fullName: e.target.value }));
                          if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                        }}
                        placeholder={t.namePlaceholder}
                        aria-invalid={Boolean(errors.fullName)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#141210] bg-white border border-[#141210]/20 rounded-md focus:outline-none focus:border-[#8C6823] focus:ring-2 focus:ring-[#C69C4E]/30"
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs font-medium text-[#9B2C2C]">
                          {t.errors[errors.fullName]}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="res-phone"
                        className="block text-sm font-medium text-[#141210] mb-1.5"
                      >
                        {t.phoneLabel} <span className="text-[#8C6823]">*</span>
                      </label>
                      <input
                        id="res-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, phone: e.target.value }));
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                        }}
                        placeholder={t.phonePlaceholder}
                        aria-invalid={Boolean(errors.phone)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#141210] bg-white border border-[#141210]/20 rounded-md tabular-nums focus:outline-none focus:border-[#8C6823] focus:ring-2 focus:ring-[#C69C4E]/30"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs font-medium text-[#9B2C2C]">
                          {t.errors[errors.phone]}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Date */}
                    <div>
                      <label
                        htmlFor="res-date"
                        className="block text-sm font-medium text-[#141210] mb-1.5"
                      >
                        {t.dateLabel} <span className="text-[#8C6823]">*</span>
                      </label>
                      <input
                        id="res-date"
                        type="date"
                        required
                        min={todayIso}
                        value={formData.date}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, date: e.target.value }));
                          if (errors.date) setErrors((prev) => ({ ...prev, date: undefined }));
                        }}
                        aria-invalid={Boolean(errors.date)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#141210] bg-white border border-[#141210]/20 rounded-md tabular-nums focus:outline-none focus:border-[#8C6823] focus:ring-2 focus:ring-[#C69C4E]/30"
                      />
                      {errors.date && (
                        <p className="mt-1.5 text-xs font-medium text-[#9B2C2C]">
                          {t.errors[errors.date]}
                        </p>
                      )}
                    </div>

                    {/* Time */}
                    <div>
                      <label
                        htmlFor="res-time"
                        className="block text-sm font-medium text-[#141210] mb-1.5"
                      >
                        {t.timeLabel} <span className="text-[#8C6823]">*</span>
                      </label>
                      <select
                        id="res-time"
                        required
                        value={formData.time}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, time: e.target.value }))
                        }
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#141210] bg-white border border-[#141210]/20 rounded-md tabular-nums focus:outline-none focus:border-[#8C6823] focus:ring-2 focus:ring-[#C69C4E]/30"
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {errors.time && (
                        <p className="mt-1.5 text-xs font-medium text-[#9B2C2C]">
                          {t.errors[errors.time]}
                        </p>
                      )}
                    </div>

                    {/* Guests */}
                    <div>
                      <label
                        htmlFor="res-guests"
                        className="block text-sm font-medium text-[#141210] mb-1.5"
                      >
                        {t.guestsLabel} <span className="text-[#8C6823]">*</span>
                      </label>
                      <select
                        id="res-guests"
                        required
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, guests: e.target.value }))
                        }
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#141210] bg-white border border-[#141210]/20 rounded-md tabular-nums focus:outline-none focus:border-[#8C6823] focus:ring-2 focus:ring-[#C69C4E]/30"
                      >
                        {t.guestOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.guests && (
                        <p className="mt-1.5 text-xs font-medium text-[#9B2C2C]">
                          {t.errors[errors.guests]}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Optional Note */}
                  <div>
                    <label
                      htmlFor="res-note"
                      className="block text-sm font-medium text-[#141210] mb-1.5"
                    >
                      {t.noteLabel}
                    </label>
                    <textarea
                      id="res-note"
                      rows={3}
                      value={formData.note}
                      onChange={(e) => setFormData((prev) => ({ ...prev, note: e.target.value }))}
                      placeholder={t.notePlaceholder}
                      className="w-full px-3.5 py-2.5 text-sm text-[#141210] bg-white border border-[#141210]/20 rounded-md focus:outline-none focus:border-[#8C6823] focus:ring-2 focus:ring-[#C69C4E]/30"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-[#5E544A]">{t.requiredHint}</p>
                    <button
                      type="submit"
                      className="min-h-[46px] px-7 py-3 text-sm font-semibold text-[#FAF7F2] bg-[#141210] hover:bg-[#2B2622] transition-colors rounded-md whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6823]"
                    >
                      {t.submitButton}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
