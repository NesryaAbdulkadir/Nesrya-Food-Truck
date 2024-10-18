import { CopyrightIcon } from "lucide-react";
import React from "react";
import { socialMedias } from "../../constants";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center  md:px-20 px-8 py-5 bg-white">
      <a href="#home">
        <img
          src="/logo.png"
          alt="logo"
          className="h-auto w-24 cursor-pointer"
        />
      </a>
      <div className="hidden sm:flex gap-7 text-textColor">
        {socialMedias.map((item, index) => (
          <a key={index} href={item.path}>
            {item.icon}
          </a>
        ))}
      </div>
      <CopyrightIcon />
    </footer>
  );
}
