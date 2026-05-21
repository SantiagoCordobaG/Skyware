import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs, faqsIntro } from "../../data/faqs";
import SectionHeader from "../ui/SectionHeader";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeader badge={faqsIntro.badge} title={faqsIntro.title} />

        <div className="mt-12 grid gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-black text-slate-950 focus:outline-none focus:ring-4 focus:ring-blue-100"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-blue-600 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p id={answerId} className="px-5 pb-5 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
