"use client";
import Link from "next/link";
export default function Header() {
  return (
    <header>
      <div>
        <section className="relative mx-auto">
        <div className="flex justify-center">
          <img
            className="w-auto h-auto object-fit-cover bg-transparent"
            src="https://windsorfringe.org.uk/wp-content/uploads/2020/03/1.png"
            alt="Covid-19"
          />
        </div>
        <div>
        <h4 className="text-center font-bold">A Website that gives the data of Covid-19</h4>
        </div>
        </section>
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-[#576F72] text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a className="hover:text-gray-200 text-xl" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-gray-200 text-xl"
                    href="/AllCountries"
                  >
                    All Countries
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200 text-xl" href="/MyRecords">
                    My Records
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    </header>
  );
}
