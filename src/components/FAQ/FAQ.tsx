import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { memo } from "react";
import { IconMenu, IconX } from "@tabler/icons";
import { Popover, Transition } from "@headlessui/react";

export const FAQ = memo(function _FAQ() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-16 tablet:gap-8 grid-cols-1 tablet:grid-cols-2">
        <div className="mx-auto w-100 max-w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">FAQ</h2>
            <button className="border border-slate-800 text-slate-800 hover:bg-slate-800 bg-transparent hover:text-white px-6 py-2">
              more
            </button>
          </div>
          <ul className="mt-6">
            <li className="my-2">
              <Link href="#">
                <a className="block border-b border-slate-300 py-2 hover:opacity-80">
                  目の前にはまた長い通路があって、まだ白うさぎがその通路をあわてて走っていくのが見えました。
                </a>
              </Link>
            </li>
            <li className="my-2">
              <Link href="#">
                <a className="block border-b border-slate-300 py-2 hover:opacity-80">
                  屋根からランプが一列にぶら下がって明るくなっていました?
                </a>
              </Link>
            </li>
            <li className="my-2">
              <Link href="#">
                <a className="block border-b border-slate-300 py-2 hover:opacity-80">
                  その小さなとびらのところで待っていてもしかたないので、アリスはテーブルのところに戻りました。別の鍵がのってたりしないかな、となかば期待していたのです?
                </a>
              </Link>
            </li>
            <li className="my-2">
              <Link href="#">
                <a className="block border-b border-slate-300 py-2 hover:opacity-80">
                  「ああ、望遠鏡みたいにちぢまれたらなできると思うんだ、やりかたさえわかれば」というのも、近ごろいろいろへんてこりんなことが起こりすぎた。
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mx-auto w-100 max-w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">News</h2>
            <button className="border border-slate-800 text-slate-800 hover:bg-slate-800 bg-transparent hover:text-white px-6 py-2">
              more
            </button>
          </div>
          <ul className="mt-6">
            <li className="my-2">
              <Link href="#">
                <a className="block border-b border-slate-300 py-2 hover:opacity-80">
                  <span className="text-sm ">2020.01.08</span>
                  <br />
                  ズミの穴くらいの大きさしかありません。ひざをついてのぞいてみると、それは見たこともないようなきれいなお庭につづいています。
                </a>
              </Link>
            </li>
            <li className="my-2">
              <Link href="#">
                <a className="block border-b border-slate-300 py-2 hover:opacity-80">
                  <span className="text-sm ">2020.01.08</span>
                  <br />
                  まずは下をながめて、どこに向かおうとしているのかを見きわめようとしました。でも暗すぎてなにも見えません。
                </a>
              </Link>
            </li>
            <li className="my-2">
              <Link href="#">
                <a className="block border-b border-slate-300 py-2 hover:opacity-80">
                  <span className="text-sm ">2020.01.08</span>
                  <br />
                  でもそのうさぎがほんとうに、チョッキのポケットから懐中時計（かいちゅうどけい）をとりだしてそれをながめ、そしてまたあわててかけだしたとき、アリスもとびあがりました。というのも、チョッキのポケットなんかがあるうさぎはこれまで見たことがないし、そこからとりだす時計をもっているうさぎなんかも見たことないぞ、というのに急に気がついたからです。
                </a>
              </Link>
            </li>
            <li className="my-2">
              <Link href="#">
                <a className="block border-b border-slate-300 py-2 hover:opacity-80">
                  <span className="text-sm ">2020.01.08</span>
                  <br />
                  でもこうして暗唱してみると、いいれんしゅうにはなったってこと
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});
