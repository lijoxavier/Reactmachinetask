import React, { useEffect, useState } from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  CartesianGrid,
} from 'recharts';
import axios from 'axios';
import { API_GRAPH } from '../utils/utils';

const LineGraph = () => {
  const [graph, setGraph] = useState([]);

  const fetchTable = async () => {
    try {
      const response = await axios(API_GRAPH);
      // console.log(response.data);
      setGraph(response?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTable();
  }, []);
  return (
    <div className="bg-red-200">
      <LineChart
        width={650}
        height={400}
        data={graph}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        className='bg-slate-50 mt-10 ml-12 pt-2 rounded-lg drop-shadow-md'
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="x" stroke="#8884d8" />
        <Line type="monotone" dataKey="y" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default LineGraph;
