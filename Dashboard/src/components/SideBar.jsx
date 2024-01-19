import React from 'react'
import Briefcase from "../assets/Briefcase.png"
import CircledMenu from "../assets/Circled Menu.png"
import Support from "../assets/Support.png"
import Help from "../assets/Help.png"
import Puzzle from "../assets/Puzzle.png"

const SideBar = () => {
  return (
    <div className="w-[25%] min-h-screen bg-slate-800">
      <div className="logo flex flex-col items-center pt-16">
        <img src={Briefcase} alt="Briefcase" className="w-20" />
        <h3 className="text-slate-50 font-semibold text-sm">STATBOARD</h3>
      </div>
      <div className="text-slate-50 pt-32 ml-10 flex flex-col gap-8">
        <div className="bg-slate-100 flex items-center   gap-2 w-full p-2 pl-8 pb-3 rounded-l-md">
          <img src={CircledMenu} alt="Circled Menu" className="object-cover" />
          <a href="" className="text-slate-800 font-semibold ">
            Dashboard
          </a>
        </div>
        <div className="bg-slate-900 flex items-center   gap-2 w-full p-2 pl-8 pb-3 rounded-l-md">
          <img src={Support} alt="Circled Menu" className="object-cover" />
          <a href="" className="text-slate-100 font-semibold">
            Support
          </a>
        </div>
        <div className="bg-slate-900 flex items-center  gap-2 w-full p-2  pl-8 pb-3 rounded-l-md">
          <img src={Puzzle} alt="Circled Menu" className="object-cover" />
          <a href="" className="text-slate-100 font-semibold">
            Plugins
          </a>
        </div>
        <div className="bg-slate-900 flex items-center  gap-2 w-full p-2  pl-8 pb-3 rounded-l-md">
          <img src={Help} alt="Circled Menu" className="object-cover" />
          <a href="" className="text-slate-100 font-semibold">
            Help
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar