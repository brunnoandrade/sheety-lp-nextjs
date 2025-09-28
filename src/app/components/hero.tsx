"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0f0b] to-[#0f1a12] px-8 pt-25 md:pt-40">
      <div className="absolute top-30 left-10 w-46 h-46 rounded-full bg-green-400/10 blur-2xl" />
      <div className="absolute top-80 left-1/3 w-16 h-16 rounded-full bg-green-500/10 blur-lg" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-green-300/10 blur-2xl" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-white">
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

        <div className="w-full mt-5 md:mt-20 pb-10">
          <div className="relative mx-auto w-full h-auto max-w-[1000px]">
            <video
              src="./videos/hero.mp4"
              className="w-full h-auto rounded-lg shadow-2xl shadow-green-900/20 cursor-grab"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              poster="./images/hero.png"
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>

            <button
              onClick={() => setIsOpen(true)}
              className="
                absolute inset-0 flex items-center justify-center
                bg-black/30
                opacity-100 md:opacity-0 md:hover:opacity-100
                transition-opacity cursor-pointer
              "
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#a2f25c] px-4 py-2 text-sm md:px-6 md:py-3 md:text-base text-[#0a0f0b] font-medium hover:bg-[#b5f57a] transition-colors">
                ▶ Assistir demonstração
              </span>
            </button>
          </div>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-4xl rounded-xl overflow-hidden bg-black">
            <video
              src="./videos/hero.mp4"
              className="w-full h-auto"
              controls
              autoPlay
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
