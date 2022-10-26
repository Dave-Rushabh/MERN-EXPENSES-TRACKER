import React from 'react'
import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

Chart.register(ArcElement)

const Graph = () => {
  /**
   * Sample Data to show the chart, will be updated later once API is ready
   */

  const config = {
    data: {
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      cutout: 100,
    },
  }

  return (
    <div className='flex justify-center max-w-xs mx-auto'>
      <div className='item'>
        <div className='chart relative'>
          <Doughnut {...config} />
          <h3 className='mb-4 font-bold title'>
            Total
            <span className='block text-3xl text-emerald-400'>&#x20b9;{0}</span>
          </h3>
        </div>
        <div className='flex flex-col py-10 gap-4'>{/* lable component */}</div>
      </div>
    </div>
  )
}

export default Graph
