import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative flex items-center w-full bg-[#6CE8B8] h-[168px]">
      <div className="padding-container max-container flex w-full justify-between items-center z-10">
        {/* Left Side: Logo and Links */}
        <div className="flex items-center">
          <Link href="/" className="pl-5">
            <Image src="/logo-olim-km.ico" alt="logo" width={74} height={29} />
          </Link>
          <div className="flex flex-col pl-5 mt-1">
            <div className="flex items-center gap-5">
              <Link href="/">
                <Image
                  src="/youtube.svg"
                  alt="youtube logo"
                  width={35}
                  height={40}
                />
              </Link>
              <Link href="/https://instagram.com/olimpiade.km.itb">
                <Image
                  src="/instagram.svg"
                  alt="instagram logo"
                  width={25}
                  height={40}
                />
              </Link>
              <Link href="/">
                <Image src="/x.svg" alt="x logo" width={25} height={40} />
              </Link>
            </div>
            <div className="text-white magical-stylish-font pt-3">
              Olimpiade KM ITB @ 2024, Bandung
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Footer Image */}
      <div className="hidden md:flex absolute bottom-0 right-0 z-0">
        <Image
          src="/Footer.png"
          alt="footer"
          width={500}
          height={175}
          className="w-full max-w-[500px] object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;
