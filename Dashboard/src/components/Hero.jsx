import React from 'react'
import Header from './Header'
import LineGraph from './LineGraph'
import PieCharts from './PieCharts'

const Hero = () => {
  return (
    <div className='w-full'>
        <Header/>
        <div className='flex'>
        <LineGraph/>
        <PieCharts/>
        </div>

    </div>
  )
}

export default Hero