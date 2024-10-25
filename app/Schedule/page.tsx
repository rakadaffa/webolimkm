import Bg from "@/public/schedule.png";
import Image from "next/image";
import Atletik from "@/public/catletik.svg"
import Badminton from "@/public/cbadminton.svg"
import Basket from "@/public/cbasket.svg"
import Catur from "@/public/ccatur.svg"
import Futsal from "@/public/cfutsal.svg"
import Ml from "@/public/cml.svg"
import Renang from "@/public/crenang.svg"
import TenisMeja from "@/public/ctenis.svg"
import Valo from "@/public/cvalo.svg"
import Voli from "@/public/cvoli.svg"
import Link from "next/link";

const page = () => {
  return (
    <section>
      <div className='w-full bg-[#F9F3BA] min-h-screen h-full'>
        <Image 
          src={Bg}
          alt='Bg'
          className='w-full'
        />
        <div className="p-10 md:px-16">
          <h2 className="bonjour-font text-[#102F8E] text-3xl md:text-5xl"> Pilih cabang olahraga </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link href="/Schedule/Atletik">
              <div className="rounded-xl">
                <Image
                  src={Atletik}
                  alt="Logo"
                  className="w-full hover:scale-105 duration-200 transition-all"
                />
            </div>
            </Link>
            <Link href="/Schedule/Badminton">
            <div className="rounded-xl">
              <Image
                src={Badminton}
                alt="Logo"
                className="w-full hover:scale-105 duration-200 transition-all"
              />
            </div>
            </Link>
            <Link href="/Schedule/Basket">
            <div className="rounded-xl">
              <Image
                src={Basket}
                alt="Logo"
                className="w-full hover:scale-105 duration-200 transition-all"
              />
            </div>
            </Link>
            <Link href="/Schedule/Catur">
            <div className="rounded-xl">
              <Image
                src={Catur}
                alt="Logo"
                className="w-full hover:scale-105 duration-200 transition-all"
              />
            </div>
            </Link>
            <Link href="/Schedule/Futsal">
            <div className="rounded-xl">
              <Image
                src={Futsal}
                alt="Logo"
                className="w-full hover:scale-105 duration-200 transition-all"
              />
            </div>
            </Link>
            <Link href="/Schedule/ML">
            <div className="rounded-xl">
              <Image
                src={Ml}
                alt="Logo"
                className="w-full hover:scale-105 duration-200 transition-all"
              />
            </div>
            </Link>
            <Link href="/Schedule/Renang">
            <div className="rounded-xl">
              <Image
                src={Renang}
                alt="Logo"
                className="w-full hover:scale-105 duration-200 transition-all"
              />
            </div>
            </Link>
            <Link href="/Schedule/TenisMeja">
            <div className="rounded-xl">
              <Image
                src={TenisMeja}
                alt="Logo"
                className="w-full hover:scale-105 duration-200 transition-all"
              />
            </div>
            </Link>
            <Link href="/Schedule/Valorant">
            <div className="rounded-xl">
              <Image
                src={Valo}
                alt="Logo"
                className="w-full hover:scale-105 duration-200 transition-all"
              />
            </div>
            </Link>
            <Link href="/Schedule/Voli">
            <div className="rounded-xl">
              <Image
                src={Voli}
                alt="Logo"
                className="w-full hover:scale-105 duration-200 transition-all"
              />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
