import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { memo } from "react";
import { IconMenu, IconX } from "@tabler/icons";
import { Popover, Transition } from "@headlessui/react";

export const Footer = memo(function _Footer() {
  return (
    <footer className="bg-slate-800 text-white text-center p-8">
      <small>© Copyright takumibv all right reserved.</small>
    </footer>
  );
});
