export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  askedBy?: string;
};

export const faqs: FAQItem[] = [];