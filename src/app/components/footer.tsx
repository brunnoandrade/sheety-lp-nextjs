export default function Footer() {
  return (
    <footer className="px-8 py-20 flex flex-col gap-12">
      <div className="mx-auto max-w-5xl">
        <div>
          <div className="text-white">
            <div className="inline-flex items-center gap-3">
              <p className="text-2xl font-bold uppercase">CreateLPImport</p>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Feito com ❤️ para transformar suas planilhas em sistemas
              inteligentes.
            </p>
          </div>
        </div>
        <div className="flex flex-col pt-12 md:flex-row md:items-center md:justify-between">
          <p className="text-left">
            <span className="mx-auto mt-2 text-xs text-gray-500 lg:mx-0">
              © {new Date().getFullYear()} Planilize. Todos os direitos
              reservados.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
