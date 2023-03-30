import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[1, 0], [2, 200], [3, 500], [4, 1000], [5, 3608]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  return (
    <div className='chart__container'>
      <Chart data={data} axes={axes} />
    </div>
  )
}

export default MyChart