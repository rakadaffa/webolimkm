"use client";
import { useState, useEffect, useRef } from "react";
import { teams } from "@/constants/index";
import Image from "next/image";
import Bg from "@/public/playerbg.png";
import TenisMeja from "@/public/tenismeja.svg";
import Catur from "@/public/catur.svg";
import Futsal from "@/public/futsal.svg";
import Voli from "@/public/voli.svg";
import Basket from "@/public/basket.svg";
import Renang from "@/public/renang.svg";
import Badminton from "@/public/badminton.svg";
import Atletik from "@/public/atletik.svg";
import TenisMeja2 from "@/public/tenismeja2.svg";
import Atletik2 from "@/public/atletik2.svg";
import Badminton2 from "@/public/badminton2.svg";
import Basket2 from "@/public/basket2.svg";
import Catur2 from "@/public/catur2.svg";
import Futsal2 from "@/public/futsal2.svg";
import Renang2 from "@/public/renang2.svg";
import Voli2 from "@/public/voli2.svg";
import BgPop from "@/public/bgpop.svg";
import ComingSoon from "@/public/COMING SOON.svg";

const page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(null as any);
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility
  const [showSport, setShowSport] = useState<null | {
    sportName: string;
    players: string[];
  }>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filtered teams based on search term
  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        dropdownRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    // Add event listener for click events on the document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <section>
      <div className="min-h-screen h-full bg-[#F9F3BA]">
        <div className="h-[60vh] w-full relative overflow-hidden">
          <Image
            src="/Players/Background.svg"
            alt="Background Image"
            width={20}
            height={20}
            className="absolute z-0 h-full w-full object-cover"
          />

          <Image
            src="/Players/Top Left.svg"
            alt="Ornament"
            width={20}
            height={20}
            className="absolute w-[130px] md:w-[220px] top-0 z-[2]"
          />
          <Image
            src="/Players/Top Right.svg"
            alt="Ornament"
            width={20}
            height={20}
            className="absolute w-[600px] md:w-[800px] top-0 right-[0px] z-[2]"
          />
          {/* <Image  
        src="/Players/Left.svg"
        alt="Ornament"
        width={20}
        height={20}
        className="absolute w-[700px] md:w-[900px] bottom-0 z-[1]"
        /> */}
          <Image
            src="/Players/Bottom Left.svg"
            alt="Ornament"
            width={20}
            height={20}
            className="absolute w-[450px] md:w-[600px] bottom-0 z-[1]"
          />
          <Image
            src="/Players/Bottom Right.svg"
            alt="Ornament"
            width={20}
            height={20}
            className="absolute w-[400px] lg:w-[600px] bottom-0 right-0 z-[1]"
          />

          <div className="absolute h-full w-screen flex justify-center items-center z-20">
            <div className="flex flex-col lg:flex-row items-center justify-evenly">
              <Image
                src="/Players/PLAYERS.svg"
                alt="Title"
                width={20}
                height={20}
                className="w-[300px] md:w-[400px] lg:w-[550px] top-0 -translate-y-12  md:-translate-y-20 order-2 lg:order-1 lg:top-0 lg:translate-x-16 lg:-translate-y-4"
              />
              <Image
                src="/Players/Ball.svg"
                alt="Title"
                width={20}
                height={20}
                className="w-[400px] md:w-[550px] lg:w-[700px] order-1 lg:order-2"
              />
            </div>
          </div>
        </div>
        {/* Search Bar */}

        <div className="mx-auto w-[90%] relative pt-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="CARI HIMPUNAN MAHASISWA JURUSAN/PROGRAM STUDI"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowDropdown(true)} // Show dropdown when input is focused
            className="w-full p-3  rounded-lg bg-[#F6E091] text-black bonjour-font text-lg"
          />
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute top-12 w-full bg-[#F6E091] rounded-lg max-h-36 overflow-y-auto mt-2 overflow-x-hidden z-[20]"
            >
              {/* Display all teams but only show 3 at a time with scroll */}
              {filteredTeams.map((team, index) => (
                <div
                  key={index}
                  className="p-3 hover:bg-gray-200 cursor-pointer bonjour-font border-bottom-center flex gap-3"
                  onClick={() => {
                    setSelectedTeam(team);
                    setShowDropdown(false); // Hide dropdown when team is selected
                    setSearchTerm(""); // Reset search term
                  }}
                >
                  <Image src={team.image} alt="Logo" width={40} height={40} />
                  {team.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Selected Team */}
        {selectedTeam && (
          <div className="mt-10 pb-8 w-[90%] mx-auto">
            <div className="flex gap-5 mb-5">
              <Image
                src={selectedTeam.image}
                alt="Logo"
                width={60}
                height={60}
              />
              <p className="bonjour-font text-2xl sm:text-4xl font-semibold">
                {" "}
                {selectedTeam.name}{" "}
              </p>
            </div>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
              {selectedTeam.sports.map((sport: any, index: number) => (
                <div
                  key={index}
                  className="rounded-xl relative bg-[#F6E091] pb-5"
                >
                  {sport.sportName == "Tenis Meja" && (
                    <Image
                      src={TenisMeja}
                      alt="Logo"
                      width={20}
                      height={20}
                      className="w-full rounded-xl"
                    />
                  )}
                  {sport.sportName == "Catur" && (
                    <Image
                      src={Catur}
                      alt="Logo"
                      width={20}
                      height={20}
                      className="w-full rounded-xl"
                    />
                  )}
                  {sport.sportName == "Futsal" && (
                    <Image
                      src={Futsal}
                      alt="Logo"
                      width={20}
                      height={20}
                      className="w-full rounded-xl"
                    />
                  )}
                  {sport.sportName == "Voli" && (
                    <Image
                      src={Voli}
                      alt="Logo"
                      width={20}
                      height={20}
                      className="w-full rounded-xl"
                    />
                  )}
                  {sport.sportName == "Basket" && (
                    <Image
                      src={Basket}
                      alt="Logo"
                      width={20}
                      height={20}
                      className="w-full rounded-xl"
                    />
                  )}
                  {sport.sportName == "Renang" && (
                    <Image
                      src={Renang}
                      alt="Logo"
                      width={20}
                      height={20}
                      className="w-full rounded-xl"
                    />
                  )}
                  {sport.sportName == "Badminton" && (
                    <Image
                      src={Badminton}
                      alt="Logo"
                      width={20}
                      height={20}
                      className="w-full rounded-xl"
                    />
                  )}
                  {sport.sportName == "Atletik" && (
                    <Image
                      src={Atletik}
                      alt="Logo"
                      width={20}
                      height={20}
                      className="w-full rounded-xl"
                    />
                  )}
                  <ul className="mx-auto w-[90%] -mt-5 md:-mt-11 lg:-mt-[4.5rem]">
                    {sport.players
                      .slice(0, 5)
                      .map((player: string, i: number) => (
                        <li
                          key={i}
                          className="bg-[#F2A845] rounded-full p-2 bonjour-font text-black mb-2 text-xs xs:text-base"
                        >
                          {" "}
                          <span className="rounded-full bg-[#F9F3BA] py-1 px-2 mr-3">
                            {" "}
                            {i + 1}{" "}
                          </span>
                          {player}
                        </li>
                      ))}
                  </ul>
                  {sport.players.length > 5 && (
                    <div className="mx-auto w-[90%]">
                      <button
                        className="text-black bg-[#F6C765] hover:bg-[#b99649] rounded-full text-center bonjour-font w-full p-2 text-xs xs:text-base"
                        onClick={() => setShowSport(sport)}
                      >
                        See More
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal for "See More" */}
        {showSport && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#F6E091] rounded-xl shadow-lg w-[90%] lg:max-w-[80%] h-fit relative pb-10">
              <Image
                src={BgPop}
                alt="Bg"
                width={20}
                height={20}
                className="w-full rounded-xl absolute top-0"
              />

              {/* {showSport.sportName == } */}
              {showSport.sportName == "Tenis Meja" && (
                <Image
                  src={TenisMeja2}
                  alt="Logo"
                  width={20}
                  height={20}
                  className="w-[80%] rounded-xl mx-auto"
                />
              )}
              {showSport.sportName == "Catur" && (
                <Image
                  src={Catur2}
                  alt="Logo"
                  width={20}
                  height={20}
                  className="w-[80%] rounded-xl mx-auto"
                />
              )}
              {showSport.sportName == "Futsal" && (
                <Image
                  src={Futsal2}
                  alt="Logo"
                  width={20}
                  height={20}
                  className="w-[80%] rounded-xl mx-auto"
                />
              )}
              {showSport.sportName == "Voli" && (
                <Image
                  src={Voli2}
                  alt="Logo"
                  width={20}
                  height={20}
                  className="w-[80%] rounded-xl mx-auto"
                />
              )}
              {showSport.sportName == "Basket" && (
                <Image
                  src={Basket2}
                  alt="Logo"
                  width={20}
                  height={20}
                  className="w-[80%] rounded-xl mx-auto"
                />
              )}
              {showSport.sportName == "Renang" && (
                <Image
                  src={Renang2}
                  alt="Logo"
                  width={20}
                  height={20}
                  className="w-[80%] rounded-xl mx-auto"
                />
              )}
              {showSport.sportName == "Badminton" && (
                <Image
                  src={Badminton2}
                  alt="Logo"
                  width={20}
                  height={20}
                  className="w-[80%] rounded-xl mx-auto"
                />
              )}
              {showSport.sportName == "Atletik" && (
                <Image
                  src={Atletik2}
                  alt="Logo"
                  width={20}
                  height={20}
                  className="w-[80%] rounded-xl mx-auto"
                />
              )}
              <div className="grid grid-cols-2 gap-2 px-5 md:px-16 -mt-5 md:-mt-16">
                {showSport.players.map((player: string, index: number) => (
                  <div
                    key={index}
                    className=" text-black bonjour-font flex bg-[#F2A845] rounded-full p-1 md:p-2 bonjour-font items-center text-sm md:text-base"
                  >
                    <span className="rounded-full bg-[#F9F3BA] px-2 py-[0.15rem] md:py-0 mr-3 text-xs sm:text-sm">
                      {" "}
                      {index + 1}{" "}
                    </span>
                    {player}
                  </div>
                ))}
                <button
                  className="bg-[#EB5327] text-white py-2 text-center rounded-xl col-span-2 bonjour-font cursor-pointer z-[20] hover:bg-[#983419]"
                  onClick={() => setShowSport(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default page;
