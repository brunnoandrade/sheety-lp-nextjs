export default function Techs() {
  return (
    <section className="px-8 py-20 bg-[#f6f7fa] rounded-3xl">
      <div className="h-full mx-auto max-w-5xl">
        <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-10 justify-between w-full">
          <div className="max-w-[200px] text-sm text-gray-500 mx-auto lg:ms-0">
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
  );
}
