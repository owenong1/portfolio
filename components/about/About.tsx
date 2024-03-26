"use client";

import React, { useState } from "react";
import Image from "next/image";
import csicon from "./coding.png";
import articon from "./palette.png";
import personalicon from "./personal.png";
import csTab from "./tabs/Comsci";
import artTab from "./tabs/Art";
import personalTab from "./tabs/Personal";

let items = [
  csicon,
  articon,
  personalicon
];

const nav_content = {
  [csicon.src]: csTab,
  [articon.src]: artTab,
  [personalicon.src]: personalTab
};

function About() {
  const [activeTab, setActiveTab] = useState(csicon.src);
  const itemsMap = items.map((item, index) => (
    <Image
      src={item}
      className={
        "navIcon pointer-events-auto mx-5 my-5 inline w-1/5 max-w-[40px] cursor-pointer transition duration-100 ease-in-out hover:scale-110 hover:opacity-100 active:scale-105 active:opacity-50 " +
        (item.src === activeTab ? "opacity-100" : "opacity-10")
      }
      onClick={() => setActiveTab(item.src)}
      alt="navigation icon"
      key={index}
    />
  ));

  return (
    <div className="mx-5 flex justify-center lg:mx-0" id="about">
      <div className="w-full max-w-[1024px]">
        <div className="my-5 text-center">
          <h1 className="text-3xl">About Me</h1>
          <div className="w-full transform rounded-xl bg-gradient-to-r from-[#82008F] via-[#EA0C5F] to-[#F6BA00] p-[1px] transition-all">
            <div className="rounded-tl-xl rounded-tr-xl bg-neutral-800">
              <div className="nav items-center">{itemsMap}</div>
            </div>
            <div className="rounded-bl-xl rounded-br-xl bg-neutral-900">
              <div className="p-5 md:flex">{nav_content[activeTab]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;