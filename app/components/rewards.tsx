"use client";

import { useState } from "react";

export default function Rewards() {
  const [unlockedRewards, setUnlockedRewards] = useState<string[]>([
    "finviernes",
  ]);

  const rewards = [
    {
      id: "finviernes",
      title: "FinViernes",
      description:
        "Recibe un descuento especial cada viernes si completaste tus retos",
      icon: "🎉",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "insignia-ahorrador",
      title: "Insignia Ahorrador",
      description:
        "Demuestra que eres un experto ahorrando 3 semanas consecutivas",
      icon: "⭐",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: "cupones",
      title: "Cupones",
      description:
        "Gana cupones para restaurantes y tiendas al completar retos",
      icon: "🎫",
      color: "from-pink-400 to-rose-500",
    },
    {
      id: "medal-oro",
      title: "Medalla de Oro",
      description:
        "Sé el mejor ahorrador del mes en tu grupo y gana esta medalla",
      icon: "🥇",
      color: "from-yellow-300 to-yellow-600",
    },
  ];

  const toggleReward = (id: string) => {
    setUnlockedRewards((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="premios"
      className="py-16 md:py-24 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Premios y recompensas
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Gana insignias, cupones y recompensas especiales por completar retos y
          ahorrar
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              onClick={() => toggleReward(reward.id)}
              className={`rounded-lg p-6 border-2 transition cursor-pointer transform hover:scale-105 ${
                unlockedRewards.includes(reward.id)
                  ? `bg-gradient-to-br ${reward.color} text-white border-transparent`
                  : "border-border bg-slate-50"
              }`}
            >
              <div className="text-5xl mb-3 text-center">{reward.icon}</div>
              <h3
                className={`font-bold text-center mb-2 ${
                  unlockedRewards.includes(reward.id)
                    ? "text-white"
                    : "text-foreground"
                }`}
              >
                {reward.title}
              </h3>
              <p
                className={`text-sm text-center ${
                  unlockedRewards.includes(reward.id)
                    ? "text-white text-opacity-90"
                    : "text-muted-foreground"
                }`}
              >
                {reward.description}
              </p>
              <div className="mt-4 text-center">
                {unlockedRewards.includes(reward.id) ? (
                  <div className="text-sm font-semibold">Desbloqueado ✓</div>
                ) : (
                  <div className="text-xs text-muted-foreground">
                    Click para desbloquear
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
