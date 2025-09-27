export default function Footer() {
  return (
    <footer className="px-8 py-20 bg-[#0a0f0b] border-t border-green-800/30">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="text-white mb-8 md:mb-0 text-center md:text-left">
            <div className="inline-flex items-center gap-3">
              <p className="text-2xl font-bold uppercase text-[#a2f25c]">
                Sheety
              </p>
            </div>
            <p className="mt-2 text-sm text-green-100/90 max-w-xs mx-auto md:mx-0">
              Feito para transformar suas planilhas em sistemas inteligentes.
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-green-100/70 mb-2">
              © {new Date().getFullYear()} Sheety. Todos os direitos
              reservados.
            </p>
            <p className="text-xs text-green-100/70">
              Desenvolvido com 💚 para revolucionar planilhas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
