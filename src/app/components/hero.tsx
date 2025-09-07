import React from "react";

export default function Hero() {
  const rating = 4.8;
  const total = 5;

  const Star = ({ filled = false }: { filled?: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${filled ? "text-yellow-400" : "text-gray-600"}`}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 1.75l3.157 6.395 7.06 1.026-5.108 4.98 1.205 7.03L12 17.99l-6.314 3.19 1.205-7.03L1.783 9.17l7.06-1.026L12 1.75z" />
    </svg>
  );

  const HalfStar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-yellow-400"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="half-clip">
          <rect x="0" y="0" width="12" height="24" />
        </clipPath>
      </defs>
      <path
        d="M12 1.75l3.157 6.395 7.06 1.026-5.108 4.98 1.205 7.03L12 17.99l-6.314 3.19 1.205-7.03L1.783 9.17l7.06-1.026L12 1.75z"
        className="fill-gray-600"
      />
      <g clipPath="url(#half-clip)">
        <path
          d="M12 1.75l3.157 6.395 7.06 1.026-5.108 4.98 1.205 7.03L12 17.99l-6.314 3.19 1.205-7.03L1.783 9.17l7.06-1.026L12 1.75z"
          className="fill-yellow-400"
        />
      </g>
    </svg>
  );

  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = total - fullStars - (hasHalf ? 1 : 0);

  return (
    <section className="relative overflow-hidden max-h-[900px] bg-[#0d0e11] px-8 py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-white">
        <div className="flex items-center gap-4">
          <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: fullStars }).map((_, i) => (
              <Star key={`full-${i}`} filled />
            ))}
            {hasHalf && <HalfStar />}
            {Array.from({ length: emptyStars }).map((_, i) => (
              <Star key={`empty-${i}`} />
            ))}
          </div>
          <span className="text-xs text-gray-400">
            {rating}/5 (45k reviews)
          </span>
        </div>

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
