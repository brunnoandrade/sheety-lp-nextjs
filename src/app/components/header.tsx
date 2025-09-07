import Link from "next/link";

export default function Header() {
  return (
    <header className="px-8 py-4 bg-[#0d0e11] border-b border-gray-800">
      <div className="flex items-center text-white justify-between mx-auto w-full max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <i className="bi bi-send-fill text-xl text-[#cff245]"></i>{" "}
          <span>CreateLPImport</span>
        </Link>
        <nav className="hidden md:flex text-sm gap-8">
          <a href="#" className="underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
        </nav>
        <a href="" className="text-sm py-1 px-4 border rounded-xl">
          Contact
        </a>
      </div>
    </header>
  );
}
