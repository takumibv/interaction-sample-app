import React from "react";
import { memo } from "react";

export const Message = memo(function _Message() {
  return (
    <section>
      <div className="grid grid-cols-1 tablet:grid-cols-2">
        <div className="h-full order-none">
          <img className="object-cover w-full h-full" src="/images/cat.jpg" alt="" />
        </div>
        <div className="p-8 flex items-center order-first tablet:order-none">
          <div className="mx-auto max-w-120">
            <p className="text-sm font-bold mb-2">message</p>
            <h2 className="text-3xl font-bold">
              きっかけは
              <br />
              コミュニケーションツール
            </h2>
            <p className="mt-4 text-sm text-gray-800">
              本当のところ、オブジェクト指向の俳優が駅伝に悲鳴を上げる
            </p>
            <p className="mt-4 text-sm text-gray-800">
              背広が太陽と旅に出るのだろう筆箱がしらみと抱き合う
            </p>
            <p className="mt-4 text-sm text-gray-800">
              アリスは川辺でおねえさんのよこにすわって、なんにもすることがないのでとても退屈（たいくつ）しはじめていました。一、二回はおねえさんの読んでいる本をのぞいてみたけれど、そこには絵も会話もないのです。
            </p>
          </div>
        </div>
        <div className="p-8 flex items-center">
          <div className="mx-auto max-w-120">
            <p className="text-sm font-bold mb-2">message</p>
            <h2 className="text-3xl font-bold">
              ペットの気持ちを
              <br />
              読み取る新しい方法
            </h2>
            <p className="mt-4 text-sm text-gray-800">
              そこへいきなり、ピンクの目をした白うさぎが近くを走ってきたのです。
            </p>
          </div>
        </div>
        <div className="h-full relative">
          <iframe
            className="w-full aspect-video"
            style={{ minHeight: "17rem" }}
            src="https://www.youtube.com/embed/hTI7lcakiLw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
});
