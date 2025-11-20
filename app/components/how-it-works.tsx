"use client";

import { useState } from "react";

export default function HowItWorks() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      number: 1,
      title: "Crear grupo",
      description: "Invita a tus amigos y establece una meta de ahorro grupal",
      icon: "👥",
    },
    {
      number: 2,
      title: "Aceptar retos",
      description:
        "Recibe retos semanales personalizados para evitar gastos impulsivos",
      icon: "🎯",
    },
    {
      number: 3,
      title: "Registrar gastos",
      description:
        "Documenta tus transacciones y comparte tu progreso con el grupo",
      icon: "💰",
    },
  ];

  const toggleStep = (step: number) => {
    setCompletedSteps((prev) =>
      prev.includes(step) ? prev.filter((s) => s !== step) : [...prev, step]
    );
  };

  return (
    <section
      id="como-funciona"
      className="py-16 md:py-24 px-4 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          ¿Cómo funciona?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tres pasos simples para comenzar a ahorrar juntos con tus amigos
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              onClick={() => toggleStep(step.number)}
              className={`p-6 rounded-lg border-2 transition cursor-pointer transform hover:scale-105 ${
                completedSteps.includes(step.number)
                  ? "border-green-500 bg-green-50 dark:bg-green-950"
                  : "border-border bg-slate-50 dark:bg-slate-800 hover:border-purple-400"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{step.icon}</div>
                {completedSteps.includes(step.number) && (
                  <div className="text-2xl">✓</div>
                )}
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                Paso {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
              <div className="mt-4 text-xs font-semibold text-muted-foreground">
                {completedSteps.includes(step.number)
                  ? "Completado ✓"
                  : "Click para completar"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
