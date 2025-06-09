import React from "react";
import { Briefcase, FolderKanban, NotebookPen } from 'lucide-react';


const BenifitSection = () => {
  const benefits = [
    {
      title: "Track Jobs",
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      description:
        "Manage your applications and keep track of your job search progress with ease.",
    },
    {
      title: "Build Portfolio",
      icon: <FolderKanban className="h-10 w-10 text-primary" />,
      description:
        "Showcase your best work and create a personalized portfolio to impress recruiters.",
    },
    {
      title: "Keep Notes",
      icon: <NotebookPen className="h-10 w-10 text-primary" />,
      description:
        "Save useful tips, interview questions, and ideas for later with our built-in note tool.",
    },
  ];

  return (
    <div className="mt-14">
      <section className="py-16 bg-muted dark:bg-background">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Why CareerNest?</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            We help you stay organized and prepared during your career journey.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenifitSection;
