import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden max-h-[900px] bg-[#0d0e11] px-8 pt-40 pb-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-white">
        <h1 className="text-center text-5xl font-semibold tracking-tighter">
          Transforme suas planilhas em sistemas inteligentes.
        </h1>

        <strong className="text-center text-xl font-normal">
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
            placeholder="Seu melhor email"
            className="rounded-xl border border-gray-700 bg-[#ebebeb]/5 px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
            required
            autoComplete="email"
          />
          <input
            type="submit"
            className="cursor-pointer rounded-xl bg-[#cff245] px-4 py-2 text-black"
            value="Entrar na lista VIP"
          />
        </form>

        <small className="px-2 text-center text-xs text-gray-400">
          Ao se inscrever, você terá acesso antecipado e ajudará a moldar o
          futuro da plataforma. 🚀
        </small>

        <div className="mt-20 w-full">
          <img
            src="./images/hero.png"
            className="mx-auto w-full max-w-[1000px] rounded shadow-2xl"
            alt="Product hero"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
