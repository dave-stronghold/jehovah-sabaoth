// components/PieChartComponent.js

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChartComponent = ({ data, width }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Create the pie chart
      const myChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        // additional options...
      });

      // Cleanup on component unmount
      return () => {
        myChart.destroy();
      };
    }
  }, [data, width]);

  return <canvas ref={chartRef} style={{ width: width || '300px' }} />;
};

export default PieChartComponent;
