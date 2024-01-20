import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {PieChart, Pie, Tooltip } from 'recharts';
import { API_PIECHART } from '../utils/utils';

const PieCharts = () => {
  const [pie,setPie] = useState([])

  const fetchPieData = async()=>{
    try {
      const response = await axios(API_PIECHART)
      setPie(response.data)
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log(pie,"pie");
  useEffect(()=>{
    fetchPieData()
  },[])

  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie
          dataKey="value"
          nameKey="label"
          isAnimationActive={false}
          data={pie}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          
        />
        <Tooltip />
        {/* <Pie
          // data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        /> */}
      </PieChart>
    </div>
  );
}

export default PieCharts