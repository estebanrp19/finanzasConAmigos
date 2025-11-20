"use client";

import { useState } from "react";

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: "Chat Coach",
      description:
        "Un asistente IA que te da consejos personalizados sobre finanzas basados en tus gastos",
      icon: "🤖",
      details: [
        "Análisis de gastos en tiempo real",
        "Recomendaciones personalizadas",
        "Responde preguntas sobre finanzas",
      ],
    },
    {
      title: "Ranking del grupo",
      description:
        "Compite amigablemente con tus amigos y ve quién es el mejor ahorrador",
      icon: "🏆",
      details: [
        "Posiciones actualizadas semanalmente",
        "Medallas y logros",
        "Motivación grupal",
      ],
    },
    {
      title: "Metas grupales",
      description:
        "Establece objetivos de ahorro conjuntos y celebra cuando los alcanzan juntos",
      icon: "🎯",
      details: [
        "Progreso visual",
        "Hitos celebrados",
        "Recordatorios de avance",
      ],
    },
  ];

  return (
    <section
      id="caracteristicas"
      className="py-16 md:py-24 px-4 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Características principales
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setSelectedFeature(index)}
              className={`p-6 rounded-lg border-2 transition cursor-pointer ${
                selectedFeature === index
                  ? "border-purple-500 bg-white"
                  : "border-border bg-white hover:border-purple-300"
              }`}
            >
              <div className="text-5xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed view of selected feature */}
        <div className="bg-white rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-bold mb-6">
            {features[selectedFeature].title}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-6">
                {features[selectedFeature].description}
              </p>
              <ul className="space-y-3">
                {features[selectedFeature].details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-8 flex items-center justify-center min-h-64">
              <div className="text-7xl">{features[selectedFeature].icon}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
