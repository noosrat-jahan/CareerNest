import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="mt-14">
      <h1 className="font-poppins text-5xl font-bold mb-4">Got Questions?</h1>
      <p>
        Explore how CareerNest empowers your career journey with clear answers
        to the most common questions.
      </p>

      <Accordion
        type="single"
        collapsible
        className="w-11/12 mx-auto my-10 text-left"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>❓ 1. What is CareerNest?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 ">
            <p>
              CareerNest is a career-focused platform designed to help job
              seekers prepare effectively through personalized guidance, curated
              resources, and practical tools like quizzes, mock interviews, and
              portfolio building.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>❓ 2. Who can use CareerNest?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              CareerNest is ideal for fresh graduates, job seekers, and career
              switchers looking to build skills, showcase their work, and
              connect with relevant opportunities.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>❓ 3. Is CareerNest free to use?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Yes! Signing up and accessing core features is completely free. We
              also offer optional premium tools and mentorships for deeper
              career support.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            ❓ 4. How does CareerNest help with job preparation?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We provide skill-based quizzes, mock interview simulations, resume
              templates, and career tips curated by industry experts to boost
              your confidence and readiness.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            ❓ 5. Can I showcase my portfolio on CareerNest?{" "}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Absolutely! You can build and publish a portfolio directly on
              CareerNest to show off your projects, achievements, and skills to
              potential employers.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
