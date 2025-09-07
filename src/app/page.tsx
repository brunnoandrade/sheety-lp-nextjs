import FAQ from "./components/faq";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import MoreTools from "./components/more-tools";
import Price from "./components/price";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section className="px-8 py-20 bg-[#f6f7fa] rounded-3xl">
        <div className="flex flex-col gap-16 items-center mx-auto w-full max-w-5xl">
          <h2 className="text-5xl font-semibold tracking-tighter text-center text-black">
            Securize your
            <br />
            data with us
          </h2>
          <div className="flex flex-col md:grid grid-cols-2 gap-4">
            <div className="col-span-1 flex flex-col gap-4 items-left bg-white rounded-3xl px-8 pb-8">
              <img
                src="./images/iphone-mockup-blog.png"
                className="max-w-[300px] mx-auto mb-6"
                alt=""
              />
              <h3 className="text-xl font-bold text-black">User data</h3>
              <p className="text-sm text-gray-600">
                Quo laboriosam quas saepe sunt alias delectus ducimus quidem
                natus, suscipit id aliquid consectetur. Voluptate officiis iusto
                rem.
              </p>
              <a
                href=""
                className="bg-[#cff245] px-4 py-2 text-black rounded-xl mr-auto"
              >
                Get Started
              </a>
            </div>
            <div className="col-span-1 min-h-[500px] flex flex-col gap-4 items-left bg-white rounded-3xl p-8 relative overflow-hidden">
              <h3 className="text-xl font-bold text-black">Data Collection</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                magni laudantium maxime, quo laboriosam quas saepe sunt alias
                delectus ducimus quidem natus.
              </p>
              <a
                href=""
                className="bg-[#cff245] px-4 py-2 text-black rounded-xl mr-auto"
              >
                Get Started
              </a>
              <div className="absolute w-full left-0 bottom-0 flex">
                <img
                  src="./images/hero-black.png"
                  className="max-w-[80%] ml-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-4 items-center bg-white rounded-3xl p-10 md:p-20">
              <h3 className="text-xl font-bold text-black">Your data</h3>
              <p className="text-md text-gray-600 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                rem et inventore doloribus laborum, quae obcaecati maiores
                consectetur quam. Dolores exercitationem repellat !
              </p>
              <a
                href=""
                className="bg-[#cff245] px-4 py-2 text-black rounded-xl"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      <MoreTools />
      <section className="px-8 py-20 bg-[#f6f7fa] rounded-3xl">
        <div className="h-full mx-auto max-w-5xl">
          <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-10 justify-between w-full">
            <div className="max-w-[200px] text-sm text-gray-400 mx-auto lg:ms-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <ul className="flex flex-row gap-5 justify-center flex-wrap items-center">
              <li>
                <img
                  className="grayscale max-w-[100px]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="grayscale max-w-[100px]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase.svg/2560px-Coinbase.svg.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="grayscale max-w-[100px]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Price />
      <FAQ />
      <Footer />
    </>
  );
}
