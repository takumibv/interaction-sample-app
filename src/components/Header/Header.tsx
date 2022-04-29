import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { memo } from "react";
import { IconMenu, IconX } from "@tabler/icons";
import { Popover, Transition } from "@headlessui/react";

export const Header = memo(function _Header() {
  const menus = [
    { title: "About PET", href: "#" },
    { title: "FAQ", href: "#" },
    { title: "News", href: "#" },
    { title: "Contact", href: "#" },
  ];
  // const [isOpen, setIsOpen] = React.useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsOpen(false);
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between h-16 items-stretch z-10 bg-white">
      <h1 className="self-center ml-6 uppercase font-bold text-slate-800 text-lg">
        <Link href="/">
          <a className="">PET Company</a>
        </Link>
      </h1>
      <nav className="flex text-m">
        <ul className="hidden tablet:flex self-stretch items-stretch mr-4">
          {menus.map(({ title, href }) => (
            <li key={title}>
              <Link href={href}>
                <a className="hover:bg-slate-100 p-4 h-full flex items-center">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex self-stretch items-stretch">
          <li>
            <Link href="#">
              <a className="font-bold bg-slate-900 hover:bg-slate-700 text-white p-4 h-full flex items-center">
                Purchase
              </a>
            </Link>
          </li>
        </ul>
        <Popover className={"relative z-10"}>
          {({ open }) => (
            <>
              <ul className="flex tablet:hidden self-stretch items-stretch h-full">
                <li className="h-full">
                  <Popover.Button
                    // onClick={onClickMenu}
                    className="font-bold bg-cyan-100 hover:bg-cyan-200 text-slate-800 p-4 h-full flex items-center justify-center w-16"
                  >
                    {open ? <IconX /> : <IconMenu />}
                  </Popover.Button>
                </li>
              </ul>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0 pointer-events-none"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0 pointer-events-none"
              >
                <Popover.Panel static className="absolute right-0 z-10 p-3 w-screen sp:max-w-xl">
                  <div className="bg-white shadow-lg">
                    <ul>
                      {menus.map(({ title, href }) => (
                        <li key={title}>
                          <Link href={href}>
                            <a className="hover:bg-slate-100 p-4 h-full flex items-center">
                              {title}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </nav>
    </header>
  );
});
