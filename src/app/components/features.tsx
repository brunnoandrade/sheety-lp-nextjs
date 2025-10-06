import Image from "next/image";
import { ScrollLink } from "react-scroll";

export default function Features() {
  return (
    <section id="features" className="px-8 py-20 bg-[#f6f7fa] rounded-t-3xl">
      <div className="flex flex-col gap-16 items-center mx-auto w-full max-w-5xl">
        <h2 className="text-5xl font-semibold tracking-tighter text-center text-green-900">
          Do Excel ao Dashboard
          <br />
          em um clique
        </h2>
        <div className="flex flex-col md:grid grid-cols-2 gap-4">
          <div className="col-span-1 flex flex-col gap-4 items-left bg-white rounded-3xl px-8 pb-8">
            <Image
              src="/images/feat1.png"
              className="max-w-[450px] mx-auto mb-6 mt-4"
              alt=""
              width={450}
              height={200}
            />
            <h3 className="text-xl font-bold text-green-900">
              Construtor automático de dashboards
            </h3>
            <p className="text-sm text-green-800">
              Transforme sua planilha em relatórios e gráficos interativos sem
              precisar mexer em fórmulas complicadas.
            </p>
            <a
              href="#hero"
              className="bg-[#cff245] px-4 py-2 text-green-900 rounded-xl mr-auto"
            >
              Receber acesso antecipado
            </a>
          </div>
          <div className="col-span-1 min-h-[500px] flex flex-col gap-4 items-left bg-white rounded-3xl p-8 relative overflow-hidden">
            <Image
              src="/images/feat3.png"
              className="max-w-[90%] mx-auto mb-6"
              alt=""
              width={450}
              height={200}
            />
            <h3 className="text-xl font-bold text-green-900">
              Integração instantânea com planilhas
            </h3>
            <p className="text-sm text-green-800">
              Conecte seu Excel ou Google Sheets e veja os dados ganharem vida
              em um sistema pronto para usar.
            </p>
            <a
              href="#hero"
              className="bg-[#cff245] px-4 py-2 text-green-900 rounded-xl mr-auto"
            >
              Receber acesso antecipado
            </a>
            <div className="absolute w-full left-0 bottom-0 flex">

            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-4 items-center bg-white rounded-3xl p-10 md:p-20">
            <Image
              src="/images/feat2.png"
              className="max-w-[90%] mx-auto mb-6"
              alt=""
              width={650}
              height={450}
            />
            <h3 className="text-xl font-bold text-green-900">
              De planilhas confusas a sistemas inteligentes
            </h3>
            <p className="text-md text-green-800 text-center">
              Transforme seus arquivos em um painel completo, com relatórios,
              gráficos e automações. Mais agilidade, menos retrabalho - e
              decisões muito mais rápidas.
            </p>
            <a
              href="#hero"
              className="bg-[#cff245] px-4 py-2 text-green-900 rounded-xl"
            >
              Receber acesso antecipado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
