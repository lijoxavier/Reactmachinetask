import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar'

function App() {

  return (
    <>
      <div className='min-h-screen w-full bg-slate-300'>
        <SideBar />
      </div>
    </>
  );
}

export default App
