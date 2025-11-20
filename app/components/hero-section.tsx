"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [amount, setAmount] = useState("");
  const [savings, setSavings] = useState<number[]>([]);

  const handleAddSavings = () => {
    if (
      amount &&
      !isNaN(Number.parseFloat(amount)) &&
      Number.parseFloat(amount) > 0
    ) {
      setSavings([...savings, Number.parseFloat(amount)]);
      setAmount("");
    }
  };

  const handleRemoveSavings = (index: number) => {
    setSavings(savings.filter((_, i) => i !== index));
  };

  const totalSavings = savings.reduce((acc, val) => acc + val, 0);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 md:py-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Finanzas con Amigos
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ahorra juntos y evita gastos impulsivos con tus amigos.
            </p>
            <p className="text-base text-muted-foreground">
              Motívate mutuamente para lograr metas financieras, comparte retos
              semanales y celebra logros juntos.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-purple-600">100+</div>
                <div className="text-sm text-muted-foreground">
                  Grupos activos
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-pink-600">2.5k+</div>
                <div className="text-sm text-muted-foreground">Usuarios</div>
              </div>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105 w-full md:w-auto"
            >
              Crear grupo
            </button>
          </div>

          {/* Right side - Savings Tracker */}
          <div className="flex justify-center">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-border w-full max-w-md">
              <h3 className="text-lg font-bold mb-4">Registra tu ahorro</h3>

              <div className="flex gap-2 mb-4">
                <input
                  type="number"
                  placeholder="Cantidad a ahorrar"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddSavings()}
                  className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handleAddSavings}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                  Añadir
                </button>
              </div>

              {/* Total savings */}
              <div className="mb-4 p-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg">
                <div className="text-sm text-muted-foreground">
                  Total ahorrado
                </div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  ${totalSavings.toFixed(2)}
                </div>
              </div>

              {/* Savings list */}
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {savings.length === 0 ? (
                  <div className="text-center py-6 text-muted-foreground">
                    Comienza a registrar tus ahorros
                  </div>
                ) : (
                  savings.map((value, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg animate-in"
                    >
                      <div>
                        <div className="font-semibold">${value.toFixed(2)}</div>
                        <div className="text-xs text-muted-foreground">
                          Registro {index + 1}
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveSavings(index)}
                        className="text-red-500 hover:text-red-700 transition"
                        title="Eliminar"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-md w-full animate-in">
            <h2 className="text-2xl font-bold mb-4">Crear nuevo grupo</h2>
            <input
              type="text"
              placeholder="Nombre del grupo"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg mb-4 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="space-y-2 mb-6">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                Invitar amigos por correo
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                Establecer meta grupal
              </label>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  setGroupName("");
                }}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition"
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
