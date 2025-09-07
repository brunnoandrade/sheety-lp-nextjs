export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-[#f6f7fa] rounded-b-3xl">
      <div className="h-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="font-semibold tracking-tighter text-5xl text-center text-green-900">
              FAQ
            </h2>
            <p className="mx-auto mt-4 text-sm text-green-800 text-center">
              Perguntas frequentes
            </p>
          </div>
          <div className="flex flex-col mx-auto max-w-2xl gap-6 text-base w-full px-4">
            <details>
              <summary className="cursor-pointer text-base font-medium tracking-tight text-green-900">
                O que é essa plataforma?
              </summary>
              <p className="pt-4 text-sm text-green-800">
                É uma ferramenta que transforma planilhas em sistemas completos
                com dashboards, relatórios e automações que não precisam de
                código de programação.
              </p>
            </details>
            <details>
              <summary className="cursor-pointer text-base font-medium tracking-tight text-green-900">
                Preciso saber programar?
              </summary>
              <p className="pt-4 text-sm text-green-700">
                Não. Basta enviar sua planilha ou conectar ao Google Sheets. O
                sistema reconhece os dados e cria automaticamente os relatórios
                e gráficos.
              </p>
            </details>
            <details>
              <summary className="cursor-pointer text-base font-medium tracking-tight text-green-900">
                Quais tipos de planilhas posso usar?
              </summary>
              <p className="pt-4 text-sm text-green-700">
                Qualquer planilha de Excel ou Google Sheets: estoque, finanças,
                vendas, RH e muito mais.
              </p>
            </details>
            <details>
              <summary className="cursor-pointer text-base font-medium tracking-tight text-green-900">
                Meus dados ficam seguros?
              </summary>
              <p className="pt-4 text-sm text-green-700">
                Sim. Seus dados são processados em ambiente seguro e você tem
                controle sobre quem pode visualizar e editar os dashboards.
              </p>
            </details>
            <details>
              <summary className="cursor-pointer text-base font-medium tracking-tight text-green-900">
                Vai ter plano gratuito?
              </summary>
              <p className="pt-4 text-sm text-green-700">
                No momento estamos em fase de validação. Quem entrar na lista de
                espera terá acesso antecipado e benefícios exclusivos no
                lançamento.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
