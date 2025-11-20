export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            Proyecto universitario - Isabella Castellanos y Sara López
          </p>
          <p className="text-sm text-gray-400">
            © {currentYear} Finanzas con Amigos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
