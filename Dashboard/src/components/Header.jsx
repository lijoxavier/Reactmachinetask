import React from 'react'
import Rectangle10 from '../assets/Rectangle 10.png'

const Header = () => {
  return (
    <div className=" w-full flex justify-between px-16 pt-10">
      <div className="text-xl font-semibold">
        <h3>Good Morning ! 🌞</h3>
      </div>

      <div className="flex h-12 gap-4 bg-slate-50 px-4 py-7 items-center rounded-md">
        <div>
          <h3 className="text-base font-semibold">John Doe</h3>
          <p className="text-[10px]">john@doe.com</p>
        </div>
        <img src={Rectangle10} alt="Rectangle10" />
      </div>
    </div>
  );
}

export default Header