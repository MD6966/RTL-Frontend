/* eslint-disable linebreak-style */
import React from 'react';
import Chart from 'react-apexcharts';
import {
  Card,
  CardContent,
  Typography,
  useTheme,
} from '@material-ui/core';

function MultiLineChart( props) {
  const {data,data1,data2, tooltip} = props;
  const theme = useTheme();



  const chart = {
    options: {
      chart: {

        background: theme.palette.background.paper,
        stacked: false,
        toolbar: {
          show: false
        },

        zoom: false
      },
      plotOptions: {
        bar: {
          columnWidth: '25%'
        }
      },
      colors: ['#1f87e6', '#E14827', '#1fe647'],
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: theme.palette.divider,
        yaxis: {
          lines: {
            show: false
          },
        }
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center',
        labels: {
          colors: theme.palette.text.secondary
        }
      },
      markers: {
        size: 4,
        strokeColors: ['#1f87e6', '#27c6db', '#112F4D'],
        strokeWidth: 0,
        shape: 'circle',
        radius: 3,
        hover: {
          size: undefined,
          sizeOffset: 3
        }
      },
      stroke: {
        width: [4, 4, 4],
        curve: 'smooth',

      },
      theme: {
        mode: theme.palette.type
      },
      tooltip: {
        theme: theme.palette.type
      },
      xaxis: {
        axisBorder: {
          color: theme.palette.divider
        },
        axisTicks: {
          show: true,
          color: theme.palette.divider
        },
        categories: data.labels,
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      },
      yaxis: [
        {
          axisBorder: {
            show: true,
            color: theme.palette.divider
          },
          axisTicks: {
            show: true,
            color: theme.palette.divider,
            beginAtZero:true,
            min: 0,
            max: 400 
          },
          labels: {
            style: {
              colors: theme.palette.text.secondary
            }
          }
        },
        {
          axisTicks: {
            show: true,
            color: theme.palette.divider
          },
          axisBorder: {
            show: true,
            color: theme.palette.divider
          },
          labels: {
            style: {
              colors: theme.palette.text.secondary
            }
          },
          opposite: true
        }
      ]
    },
    series:
      [
        {
          name: 'Phase-A',
          data
        },
        {
          name: 'Phase-B',
          data: data1
        },
        {

          name: 'Phase-C',
          data: data2
        },

      ],


  };

  return (
    <Card>
      <CardContent>
        <Typography
          color="textPrimary"
          variant="h4"
        >
          {tooltip}
        </Typography>


        <Chart
          height="300"
          type="line"
          {...chart}
        />

      </CardContent>
    </Card>
  );
}

export default MultiLineChart;
