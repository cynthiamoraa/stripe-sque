import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import AnimatedGradient from "./AnimatedGradient";
import Logo from "../public/Sque_icon_universal.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full  backdrop-blur supports-[backdrop-filter]:bg-white/5 h-16 px-4 lg:px-22">
      <div className="mx-auto px-2 md:px-8 py-3  flex items-center justify-between  lg:justify-start ">
        {/* Logo */}
        <div className="flex items-center space-x-3 pr-8">
          <img
            src="/Sque_icon_universal.svg"
            alt="Sque Logo"
            width={44}
            height={38}
          />
          <Link href="#home" className="font-semibold tracking-tight text-lg">
            Sque
          </Link>
        </div>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center justify-between w-full">
          {/* Left side links */}
          <div className="flex gap-8 items-center">
            <a href="#features" className="hover:text-gray-700">
              Features
            </a>
            <a href="#pricing" className="hover:text-gray-700">
              Pricing
            </a>
            <a href="#faqs" className="hover:text-gray-700">
              FAQs
            </a>
            <a href="#contact" className="hover:text-gray-700">
              Contact
            </a>
          </div>

          {/* Right side button */}
          <div>
            <Link
              href="#"
              className="ml-4   text-gray-900 px-4 py-2 font-medium hover:opacity-90 transition"
            >
              Login
            </Link>
            <Link
              href="#"
              className="ml-4 rounded-2xl bg-white text-blue-700 px-4 py-2 font-medium hover:opacity-90 transition"
            >
              Get started
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden ">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {/* Hamburger icon */}
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            ) : (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <nav className="lg:hidden min-h-screen flex flex-col gap-6 px-8 py-6 bg-gray-50  text-gray-700">
          <a href="features" onClick={() => setIsOpen(false)}>
            Features
          </a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>
            Pricing
          </a>
          <a href="#faqs" onClick={() => setIsOpen(false)}>
            FAQs
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
          <div className="flex flex-col  bottom-0">
            <Link
              href="#"
              className=" bg-white w-fit rounded-xl mb-4 text-blue-700 px-4 py-2 ffont-[500] md:font-bold  hover:opacity-90 transition"
            >
              Login
            </Link>
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="rounded-xl w-fit  bg-blue-500  text-white px-4 py-2 font-[500] md:font-bold hover:opacity-90 transition"
            >
              Get started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Nav;
