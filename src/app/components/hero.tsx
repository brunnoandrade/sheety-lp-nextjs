import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden max-h-[900px] bg-gradient-to-b from-[#0a0f0b] to-[#0f1a12] px-8 pt-40 pb-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-white">
        <h1 className="text-center text-5xl font-semibold tracking-tighter text-green-50">
          Transforme suas planilhas em sistemas inteligentes.
        </h1>

        <strong className="text-center text-xl font-normal text-green-100/90">
          Do Excel ao dashboard em segundos.
          <br /> Relatórios, gráficos e automações sem código.
        </strong>

        <form
          action="index.php"
          method="post"
          className="flex items-center gap-4"
          aria-label="Entre na lista de espera"
        >
          <input
            name="email"
            type="email"
            placeholder="Seu melhor e-mail"
            className="rounded-xl border border-[#a2f25c] bg-green-900/30 px-4 py-2 text-green-100/90 placeholder-green-100/90 focus:outline-none"
            required
            autoComplete="email"
          />
          <input
            type="submit"
            className="cursor-pointer rounded-xl bg-[#a2f25c] px-4 py-2 text-[#0a0f0b] font-medium hover:bg-[#b5f57a] transition-colors"
            value="Entrar na lista VIP"
          />
        </form>

        <small className="px-2 text-center text-xs text-green-100/70">
          Ao se inscrever, você terá acesso antecipado e ajudará a moldar o
          futuro da plataforma. 🚀
        </small>

        <div className="mt-20 w-full">
          <img
            src="./images/hero.png"
            className="mx-auto w-full max-w-[1000px] rounded-lg shadow-2xl shadow-green-900/20 border border-green-800/30"
            alt="Product hero"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
