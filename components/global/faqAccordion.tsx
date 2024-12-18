import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';

interface FAQ {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs?: FAQ[]; // Default to an optional array of FAQ objects
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs = [] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const accordionRef = useRef<HTMLDivElement[]>([]); // Ref for tracking accordion item divs

  // GSAP animation for the FAQ answers
  const toggleAccordion = (index: number) => {
    const isActive = activeIndex === index;
    setActiveIndex(isActive ? null : index);

    const target = accordionRef.current[index];

    // Animate opening/closing of the FAQ
    if (target) {
      const answerElement = target.querySelector<HTMLDivElement>('.faq-answer');
      if (answerElement) {
        if (isActive) {
          gsap.to(answerElement, { opacity: 0, height: 0, duration: 0.4, ease: 'power2.out' });
        } else {
          gsap.to(answerElement, { opacity: 1, height: 'auto', duration: 0.6, ease: 'power2.out' });
        }
      }
    }
  };

  return (
    <div className="space-y-4 w-full">
      {faqs.length > 0 ? (
        faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-md p-2 w-full ${activeIndex === index ? "border-[#FFB100] bg-yellow-100" : "hover:border-[#FFB100] hover:bg-yellow-100"}`}
            ref={(el) => {
              if (el) accordionRef.current[index] = el;
            }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left font-semibold text-[14px] lg:text-[18px] text-[#212121] flex justify-between"
            >
              <span className="md:pr-20 md:px-5 w-[92%] md:w-[95%] p-0 lg:pt-2">{faq.question}</span>
              {/* Plus/Minus Icon with border and full circle */}
              <span
                className={`transition-all duration-300 text-[16px] w-6 h-6 md:text-[24px] font-bold  flex justify-center items-center lg:w-10 lg:h-10 rounded-full border ${
                  activeIndex === index ? 'rotate-180 border-[#FFB100] text-[#FFB100]' : 'text-[#a7a7a7]'
                }`}
              >
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            {/* Animated FAQ Answer */}
            <div className="faq-answer overflow-hidden md:pr-20 md:px-5 opacity-0 h-0">
              {activeIndex === index && <p className="text-[14px] lg:text-[18px] text-[#212121] py-4">{faq.answer}</p>}
            </div>
          </div>
        ))
      ) : (
        <p className="text-[#212121] text-[18px]">No FAQs available.</p>
      )}
    </div>
  );
};

export default FaqAccordion;