import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden max-h-[900px] bg-[#0d0e11] px-8 pt-40 pb-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-white">
        <h1 className="text-center text-5xl font-semibold tracking-tighter">
          adipisicing elit
          <br /> quia eius ratione natus.
        </h1>

        <strong className="text-center text-xl font-normal">
          Lorem ipsum, dolor sit amet consectetur
          <br /> adipisicing elit quia eius ratione natus.
        </strong>

        <form
          action="index.php"
          method="post"
          className="flex items-center gap-4"
          aria-label="Join waitlist form"
        >
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="rounded-xl border border-gray-700 bg-[#ebebeb]/5 px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
            required
            autoComplete="email"
          />
          <input
            type="submit"
            className="cursor-pointer rounded-xl bg-[#cff245] px-4 py-2 text-black"
            value="Join Waitlist"
          />
        </form>

        <small className="px-2 text-center text-xs text-gray-400">
          By clicking Join Waitlist you are confirming that you agree with our{" "}
          <a href="#" className="underline">
            Terms and Conditions
          </a>
          .
        </small>

        <div className="mt-20 w-full">
          <img
            src="./images/hero-black.png"
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
