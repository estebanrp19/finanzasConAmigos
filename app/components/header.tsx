"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">FA</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">
            Finanzas con Amigos
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#como-funciona"
            className="text-sm hover:text-primary transition"
          >
            ¿Cómo funciona?
          </a>
          <a
            href="#caracteristicas"
            className="text-sm hover:text-primary transition hidden sm:inline"
          >
            Características
          </a>
          <a
            href="#premios"
            className="text-sm hover:text-primary transition hidden sm:inline"
          >
            Premios
          </a>
        </div>
      </nav>
    </header>
  );
}
