import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useDashboardDeficiencyNameStore from '../../../hooks/useDashboardDeficiencyNameStore';




const Chart = () => {

  
  const barGraphData = useDashboardDeficiencyNameStore((state) => state.barGraphData);

  

  return (
      
      <BarChart
        width={500}
        height={300}
        data={barGraphData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="completed" stackId="a" fill="#28A745" />
        <Bar dataKey="pending" stackId="a" fill="#DC3545" />
      </BarChart>
    
  )
}


export default Chart;