import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden max-h-[900px] bg-gradient-to-b from-[#0a0f0b] to-[#0f1a12] px-8 pt-25 md:pt-40">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-white">
        <h1 className="text-center text-5xl font-semibold tracking-tighter text-green-50 max-w-lg">
          Transforme suas planilhas em sistemas inteligentes.
        </h1>

        <strong className="text-center text-xl font-normal text-green-100/90 max-w-lg mx-auto">
          Do Excel ao dashboard em segundos. Relatórios, gráficos e automações
          sem código.
        </strong>

        <form
          action="index.php"
          method="post"
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
          aria-label="Entre na lista de espera"
        >
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-green-100/90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              name="email"
              type="email"
              placeholder="Seu melhor e-mail"
              className="w-full pl-10 rounded-xl border border-[#a2f25c] bg-green-900/30 px-4 py-2 text-green-100/90 placeholder-green-100/90 focus:outline-none"
              required
              autoComplete="email"
            />
          </div>
          <input
            type="submit"
            className="w-full sm:w-auto cursor-pointer rounded-xl bg-[#a2f25c] px-4 py-2 text-[#0a0f0b] font-medium hover:bg-[#b5f57a] transition-colors"
            value="Entrar na lista VIP"
          />
        </form>

        <small className="px-2 text-center text-xs text-green-100/70 max-w-md">
          Ao se inscrever, você terá acesso antecipado e ajudará a moldar o
          futuro da plataforma. 🚀
        </small>

        <div className="w-full mt-5 md:mt-20">
          <video
            src="./videos/hero.mp4"
            className="mx-auto w-full max-w-[1000px] rounded-lg shadow-2xl shadow-green-900/20 border border-green-800/30"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            poster="./images/hero.png" // opcional, thumbnail inicial
          >
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>

      </div>
    </section>
  );
}
