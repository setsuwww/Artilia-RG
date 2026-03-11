import { navlinks } from "@/_constants/common/navlinks";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white px-8 py-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/image/artilia.png" alt="Logo" width={34} height={34}/>
            <span className="text-lg font-light">
              Artilia.
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navlinks.map((link, index) => (
            <Link key={index} href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-black transition"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:text-black outline outline-offset-4 outline-transparent hover:outline-gray-200">
            Login
          </Link>

          <Link href="/signup" className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition outline outline-offset-4 outline-transparent hover:outline-gray-400">
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}
