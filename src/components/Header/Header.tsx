import Link from "next/link";
import { memo } from "react";

export const Header = memo(function _Header() {
  return (
    <header className="flex justify-between h-16 items-stretch">
      <h1 className="self-center ml-6 uppercase font-bold text-slate-800 text-lg">
        <Link href="/">
          <a className="">PET Company</a>
        </Link>
      </h1>
      <nav className="flex text-m">
        <ul className="flex self-stretch items-stretch">
          <li>
            <Link href="#">
              <a className="hover:bg-slate-100 p-4 h-full flex items-center">About PET</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="hover:bg-slate-100 p-4 h-full flex items-center">FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="hover:bg-slate-100 p-4 h-full flex items-center">News</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="hover:bg-slate-100 p-4 h-full flex items-center">Contact</a>
            </Link>
          </li>
        </ul>
        <ul className="flex self-stretch items-stretch ml-4">
          <li>
            <Link href="#">
              <a className="font-bold bg-slate-900 hover:bg-slate-700 text-white p-4 h-full flex items-center">
                Purchase
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
