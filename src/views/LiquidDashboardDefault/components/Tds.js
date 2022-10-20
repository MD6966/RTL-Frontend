import React from 'react';
// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Including the chart type
import Widgets from 'fusioncharts/fusioncharts.widgets';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const Thermometer = (props) => {
  const { tds, theme, color } = props;

  const chartConfigs = {
    type: 'hlineargauge', // The gauge type
    width: '100%', // Width of the gauge
    height: '175', // Height of the gauge
    dataFormat: 'json', // Data type
    dataSource: {
      chart: {
        caption: 'TDS Value',
        subcaption: '',
        lowerLimit: '0',
        upperLimit: '1000',
        chartBottomMargin: '40',
        valueFontSize: '11',
        valueFontBold: '1',
        gaugeFillMix: '{light-10},{light-70},{dark-10}',
        gaugeFillRatio: '40,20,40',
        pointerBgHoverColor: '#0075c2',
        pointerBgHoverAlpha: '100',
        showBorderOnHover: '1',
        pointerBorderHoverThickness: '2',
        pointerBorderHoverColor: '#333333',
        pointerBorderHoverAlpha: '100',
        pointerHoverRadius: '11',
        valueFontColor: color,
        theme: theme
      },
      colorRange: {
        color: [
          {
            minValue: '0',
            maxValue: '50',
            code: '#ccffff'
          },
          {
            minValue: '50',
            maxValue: '100',
            code: '#99ccff'
          },
          {
            minValue: '100',
            maxValue: '200',
            code: '#1b97da'
          },
          {
            minValue: '200',
            maxValue: '300',
            code: '#5f52fe'
          },
          {
            minValue: '300',
            maxValue: '400',
            code: '#99cc00'
          },
          {
            minValue: '400',
            maxValue: '500',
            code: '#848200'
          },
          {
            minValue: '500',
            maxValue: '750',
            code: '#932c00'
          },
          {
            minValue: '750',
            maxValue: '1000',
            code: '#461600'
          }
        ]
      },
      pointers: {
        pointer: [
          {
            borderColor: '#333333',
            borderThickness: '2',
            borderAlpha: '60',
            bgColor: '#0075c2',
            bgAlpha: '75',
            radius: '10',
            sides: '4',
            value: tds
          }
        ]
      },
      trendPoints: {
        point: [
          {
            startValue: '900',
            color: '#800000',
            dashed: '1',
            dashlen: '3',
            dashgap: '3',
            thickness: '2',
            useMarker: '1',
            markerColor: '#800000',
            markerBorderColor: '#000000',
            markerRadius: '5'
          }
        ]
      }
    }
  };

  return <ReactFC {...chartConfigs} />;
};

export default Thermometer;
