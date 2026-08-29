import { useState } from "react";
import { Plus } from "lucide-react";

import { faqs } from "../data/faq";
import SectionHeader from "../components/SectionHeader";

export default function FAQ() {
  const [open, setOpen] =
    useState<string | null>(null);

  return (
    <div className="page">
      <div className="page-title">
        <div className="section-eyebrow">
          COBBLEASIA / HELP
        </div>

        <h1>
          FREQUENTLY ASKED QUESTIONS
        </h1>

        <p>
          Questions from the community,
          answered by CobbleAsia.
        </p>
      </div>

      <section className="panel">
        <SectionHeader
          eyebrow={`${faqs.length} QUESTIONS`}
          title="Community FAQ"
        />

        {faqs.length === 0 ? (
          <div className="empty-state">
            <span>?</span>

            <strong>
              NO QUESTIONS YET
            </strong>

            <small>
              Community questions and answers
              will appear here.
            </small>
          </div>
        ) : (
          <div className="faq-list">
            {faqs.map((faq) => {
              const isOpen =
                open === faq.id;

              return (
                <button
                  key={faq.id}
                  className={`faq-item ${
                    isOpen ? "open" : ""
                  }`}
                  onClick={() =>
                    setOpen(
                      isOpen
                        ? null
                        : faq.id
                    )
                  }
                >
                  <div className="faq-question">
                    <strong>
                      {faq.question}
                    </strong>

                    <Plus
                      size={19}
                      className={
                        isOpen
                          ? "rotated"
                          : ""
                      }
                    />
                  </div>

                  {isOpen && (
                    <div className="faq-answer">
                      <p>
                        {faq.answer}
                      </p>

                      {faq.askedBy && (
                        <small>
                          Asked by{" "}
                          {faq.askedBy}
                        </small>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}