"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Play } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [typeformOpen, setTypeformOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [typeformUrl, setTypeformUrl] = useState("");
  const { trackSignUp, trackFormOpen, trackFormClose, trackDemoVideoPlay, trackDemoVideoClose } = useAnalytics();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Valida o email
    if (!email) return;

    // Rastreia a inscrição do usuário
    trackSignUp(email);

    // Constrói a URL do Typeform com o email como parâmetro
    const url = `https://form.typeform.com/to/r6aUjesb?email=${encodeURIComponent(email)}`;
    setTypeformUrl(url);

    // Abre o Typeform em um modal na mesma página
    setTypeformOpen(true);
    trackFormOpen();
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#0a0f0b] to-[#0f1a12] px-8 pt-25 md:pt-40">
      <div className="absolute top-30 left-10 w-46 h-46 rounded-full bg-green-800/10 blur-2xl" />
      <div className="absolute top-80 left-1/3 w-16 h-16 rounded-full bg-green-800/10 blur-lg" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-green-800/10 blur-2xl" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-white">
        <h1 className="text-center text-5xl font-semibold tracking-tighter text-green-50 max-w-lg">
          Transforme suas planilhas em sistemas inteligentes.
        </h1>

        <strong className="text-center text-xl font-normal text-green-100/90 max-w-lg mx-auto">
          Do Excel ao dashboard em segundos. Relatórios, gráficos e automações
          sem código.
        </strong>

        <form
          onSubmit={handleSubmit}
          className="flex flex-row items-center gap-4 w-full max-w-md"
          aria-label="Entre na lista de espera"
        >
          <div className="relative flex-1">
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
              type="email"
              placeholder="Seu melhor e-mail"
              className="w-full pl-10 rounded-xl border border-[#a2f25c] bg-green-900/30 px-4 py-2 text-green-100/90 placeholder-green-100/90 focus:outline-none"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="shrink-0 cursor-pointer rounded-xl bg-[#a2f25c] px-4 py-2 text-[#0a0f0b] font-medium hover:bg-[#b5f57a] transition-colors"
          >
            Entrar na lista VIP
          </button>
        </form>

        <small className="px-2 text-center text-xs text-green-100/70 max-w-md">
          Ao se inscrever, você terá acesso antecipado e ajudará a moldar o
          futuro da plataforma. 🚀
        </small>

        <div className="w-full mt-5 md:mt-20 pb-10">
          <div className="relative mx-auto w-full h-auto max-w-[1000px]">
            <video
              src="./videos/hero.mp4"
              className="w-full h-auto rounded-lg cursor-grab shadow-[0_0_25px_5px_rgba(34,197,94,0.3)]"
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
              onClick={() => {
                setIsOpen(true);
                trackDemoVideoPlay();
              }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity cursor-pointer"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#a2f25c] px-4 py-2 text-sm md:px-6 md:py-3 md:text-base text-[#0a0f0b] font-medium hover:bg-[#b5f57a] transition-colors">
                <Play className="w-4 h-4 md:w-4 md:h-4" />
                Assistir demonstração
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal para o vídeo de demonstração */}
      <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          trackDemoVideoClose();
        }}
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

      {/* Modal para o Typeform */}
      <Dialog
        open={typeformOpen}
        onClose={() => {
          setTypeformOpen(false);
          trackFormClose(false);
        }}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full h-full max-w-4xl max-h-[90vh] rounded-xl overflow-hidden bg-white">
            <div className="relative w-full h-full">
              <button
                onClick={() => {
                  setTypeformOpen(false);
                  trackFormClose(true);
                }}
                className="absolute top-4 right-4 z-10 bg-[#a2f25c] rounded-full p-2 text-[#0a0f0b] hover:bg-[#b5f57a]"
                aria-label="Fechar formulário"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <iframe
                src={typeformUrl}
                style={{ border: "none" }}
                width="100%"
                height="100%"
                title="Formulário de inscrição"
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
