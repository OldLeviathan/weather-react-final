import React, {useEffect, useState} from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Chart = (props) => {

  const [data, setData] = useState({
    time: '00:00',
    temp: 0,
    Температура: 0
  })

  let newData = data


  useEffect(()=>{
    const timer = setInterval(() => {
      let newTime = new Date().toLocaleTimeString().slice(0,-3);

      if(newData.length < 5 && props.data.temp !== undefined){
        newData.push({time: newTime, temp: props.data.temp, Температура:props.data.temp})
        setData(newData)
      } else if (props.temp !== undefined) {
        newData.shift()
        newData.push({time: newTime, temp: props.data.temp, Температура:props.data.temp})
        setData(newData)
      }
      console.log(newData)
      return ()=> clearInterval(timer)
    }, 5000);
  })



    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <XAxis dataKey="time"/>
        <YAxis dataKey="temp"/>
        <Line
          type="monotone"
          dataKey="Температура"
        />
      </LineChart>
    );
};

export default Chart;