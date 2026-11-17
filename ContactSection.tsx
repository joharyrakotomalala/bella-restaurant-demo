import { useEffect, useState } from 'react';
import { Check, Copy, Mail, MapPin, MessageCircle, Phone, Send, X } from 'lucide-react';
import { FICTIONAL_CONTACT, pickText } from '../data/restaurantData';
import { Language, TRANSLATIONS } from '../data/translations';

interface ContactSectionProps {
  language: Language;
}

interface DemoChatMessage {
  id: number;
  sender: 'visitor' | 'bella';
  kind?: 'greeting' | 'reply';
  text?: string;
}

export function ContactSection({ language }: ContactSectionProps) {
  const t = TRANSLATIONS[language].contact;
  const [copiedField, setCopiedField] = useState<'address' | 'phone' | 'email' | null>(null);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [demoInput, setDemoInput] = useState('');
  const [demoMessages, setDemoMessages] = useState<DemoChatMessage[]>([
    {
      id: 1,
      sender: 'bella',
      kind: 'greeting',
    },
  ]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setWhatsappOpen(false);
      }
    };
    if (whatsappOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [whatsappOpen]);

  const handleCopy = async (value: string, field: 'address' | 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const sendDemoWhatsappMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const nextId = Date.now();
    setDemoMessages((prev) => [
      ...prev,
      { id: nextId, sender: 'visitor', text: trimmed },
      { id: nextId + 1, sender: 'bella', kind: 'reply' },
    ]);
    setDemoInput('');
  };

  const address1 = pickText(FICTIONAL_CONTACT.addressLine1, language);
  const address2 = pickText(FICTIONAL_CONTACT.addressLine2, language);

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#FAF7F2] text-[#141210] border-t border-[#141210]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[#8C6823]">{t.kicker}</p>
          <h2 className="mt-2 font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-[#141210] [text-wrap:balance]">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4F473F]">{t.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Card: Fictional Coordinates */}
          <div className="lg:col-span-7 bg-[#F6F1E9] border border-[#141210]/12 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Address */}
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-[#141210]">
                  <MapPin className="w-4 h-4 text-[#8C6823]" aria-hidden="true" />
                  <span>{t.addressHeading}</span>
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-[#3E3832] leading-relaxed">
                  {address1}
                  <br />
                  {address2}
                </p>
                <button
                  type="button"
                  onClick={() => handleCopy(`${address1}, ${address2}`, 'address')}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6823] hover:text-[#141210] transition-colors cursor-pointer"
                >
                  {copiedField === 'address' ? (
                    <>
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{t.copiedAddress}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{t.copyAddress}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-[#141210]">
                  <Phone className="w-4 h-4 text-[#8C6823]" aria-hidden="true" />
                  <span>{t.phoneHeading}</span>
                </h3>
                <p className="mt-2.5 text-base font-semibold text-[#141210] tabular-nums">
                  {FICTIONAL_CONTACT.phoneDisplay}
                </p>
                <p className="mt-0.5 text-xs text-[#5E544A]">
                  {pickText(FICTIONAL_CONTACT.phoneNote, language)}
                </p>
                <button
                  type="button"
                  onClick={() => handleCopy(FICTIONAL_CONTACT.phoneDisplay, 'phone')}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6823] hover:text-[#141210] transition-colors cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{t.copiedPhone}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{t.copyPhone}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email */}
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-[#141210]">
                  <Mail className="w-4 h-4 text-[#8C6823]" aria-hidden="true" />
                  <span>{t.emailHeading}</span>
                </h3>
                <p className="mt-2.5 text-sm sm:text-base font-medium text-[#141210] break-all">
                  {FICTIONAL_CONTACT.emailDisplay}
                </p>
                <p className="mt-0.5 text-xs text-[#5E544A]">
                  {pickText(FICTIONAL_CONTACT.emailNote, language)}
                </p>
                <button
                  type="button"
                  onClick={() => handleCopy(FICTIONAL_CONTACT.emailDisplay, 'email')}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6823] hover:text-[#141210] transition-colors cursor-pointer"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{t.copiedEmail}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{t.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-sm font-semibold text-[#141210]">{t.hoursHeading}</h3>
                <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-[#3E3832]">
                  {FICTIONAL_CONTACT.hours.map((entry) => (
                    <li key={entry.days.fr} className="flex flex-col">
                      <span className="font-medium text-[#141210]">
                        {pickText(entry.days, language)}
                      </span>
                      <span className="tabular-nums text-[#5E544A]">
                        {pickText(entry.time, language)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Card: WhatsApp Demo Showcase */}
          <div className="lg:col-span-5 bg-[#141210] text-[#FAF7F2] rounded-lg p-6 sm:p-8 flex flex-col justify-between border border-[#C69C4E]/25">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#E4C27A]">
                {t.whatsappKicker}
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#FAF7F2]">
                {t.whatsappTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#FAF7F2]/80">
                {t.whatsappDescription}
              </p>

              <div className="mt-5 pt-5 border-t border-white/12 text-xs sm:text-sm text-[#FAF7F2]/75 space-y-1">
                <p>
                  {t.displayedNumber}{' '}
                  <span className="font-semibold text-[#FAF7F2] tabular-nums">
                    {FICTIONAL_CONTACT.whatsappDisplay}
                  </span>
                </p>
                <p>{pickText(FICTIONAL_CONTACT.whatsappNote, language)}</p>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setWhatsappOpen(true)}
                className="w-full min-h-[46px] inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold text-[#141210] bg-[#C69C4E] hover:bg-[#D7B26B] transition-colors rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF7F2]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.whatsappButton}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Interactive Demo Modal */}
      {whatsappOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-demo-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141210]/75 backdrop-blur-xs"
          onClick={() => setWhatsappOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#FAF7F2] text-[#141210] rounded-lg border border-[#C69C4E]/40 overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#141210] text-[#FAF7F2] px-5 py-4 flex items-center justify-between gap-4">
              <div>
                <h3 id="whatsapp-demo-title" className="font-display text-xl font-semibold">
                  {t.modalTitle}
                </h3>
                <p className="text-xs text-[#E4C27A] tabular-nums">
                  {FICTIONAL_CONTACT.whatsappDisplay} · {t.modalSubtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setWhatsappOpen(false)}
                aria-label={t.closeModalAria}
                className="w-9 h-9 inline-flex items-center justify-center rounded-md text-[#FAF7F2]/80 hover:text-[#FAF7F2] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Thread */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F6F1E9]">
              {demoMessages.map((msg) => {
                const displayText =
                  msg.kind === 'greeting'
                    ? t.initialGreeting
                    : msg.kind === 'reply'
                      ? t.autoReply
                      : msg.text ?? '';
                return (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'visitor' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-2.5 rounded-lg text-sm leading-relaxed ${
                        msg.sender === 'visitor'
                          ? 'bg-[#141210] text-[#FAF7F2]'
                          : 'bg-white border border-[#141210]/10 text-[#141210]'
                      }`}
                    >
                      {displayText}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Suggestion Buttons */}
            <div className="px-4 py-2.5 bg-[#FAF7F2] border-t border-[#141210]/10 space-y-1.5">
              <p className="text-[11px] font-medium text-[#5E544A]">{t.quickPromptsTitle}</p>
              <div className="flex flex-col gap-1.5">
                {t.quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendDemoWhatsappMessage(prompt)}
                    className="text-left text-xs px-3 py-1.5 rounded-md bg-[#EAE1D3] hover:bg-[#DFD2BE] text-[#141210] transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Demo Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendDemoWhatsappMessage(demoInput);
              }}
              className="p-3 bg-[#FAF7F2] border-t border-[#141210]/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={demoInput}
                onChange={(e) => setDemoInput(e.target.value)}
                placeholder={t.inputPlaceholder}
                className="flex-1 min-h-[42px] px-3 py-2 text-sm bg-white border border-[#141210]/20 rounded-md focus:outline-none focus:border-[#8C6823]"
              />
              <button
                type="submit"
                aria-label={t.sendAria}
                className="w-11 h-11 inline-flex items-center justify-center rounded-md bg-[#C69C4E] hover:bg-[#D7B26B] text-[#141210] transition-colors cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
