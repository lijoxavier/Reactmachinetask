import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import LineGraph from './components/LineGraph'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <div className="min-h-screen w-full bg-slate-200 text-slate-800">
        <div className='flex'>
          <SideBar />
          <Hero/>
        </div>
      </div>
    </>
  );
}

export default App
