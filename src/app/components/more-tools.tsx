import React from "react";

export default function MoreTools() {
  const items = [
    { number: 1, title: "Our best\nPlaces" },
    { number: 2, title: "See\nmore" },
    { number: 3, title: "Lorem\nipsum", active: true },
    { number: 4, title: "Best\ntools" },
    { number: 5, title: "Lost\npaper" },
    { number: 6, title: "Our best\nPlaces" },
    { number: 7, title: "Our best\nPlaces" },
    { number: 8, title: "Our best\nPlaces" },
  ];

  return (
    <section className="px-8 py-20">
      <div className="flex flex-col gap-16 items-center mx-auto w-full max-w-3xl">
        <h2 className="text-5xl font-semibold tracking-tighter text-center text-white">
          And More
          <br />
          Tools to use
        </h2>

        <div className="flex flex-wrap justify-center gap-2 w-full">
          {items.map((item) => (
            <div
              key={item.number}
              className={`flex w-full max-w-[100px] flex-col gap-2 p-8 rounded-xl items-center box-content ${
                item.active
                  ? "bg-[#cff245] border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white font-bold text-xl">
                {item.number}
              </span>
              <span className="text-center font-bold text-black whitespace-pre-line">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
