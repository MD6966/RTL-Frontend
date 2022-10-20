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

const Ph = (props) => {
  const { ph, theme, color } = props;
  const chartConfigs = {
    type: 'hlineargauge', // The gauge type
    width: '100%', // Width of the gauge
    height: '175', // Height of the gauge
    dataFormat: 'json', // Data type
    dataSource: {
      chart: {
        theme: theme,
        caption: 'Ph Value',
        subcaption: '',
        lowerLimit: '0',
        upperLimit: '15',
        chartBottomMargin: '40',
        valueFontSize: '11',
        valueFontBold: '1',
        showTickMarks: '0',
        showTickValues: '0',
        gaugeFillMix: '{light-10},{light-70},{dark-10}',
        gaugeFillRatio: '40,20,40',
        pointerBgHoverColor: '#0075c2',
        pointerBgHoverAlpha: '100',
        showBorderOnHover: '1',
        pointerBorderHoverThickness: '2',
        pointerBorderHoverColor: '#333333',
        pointerBorderHoverAlpha: '100',
        pointerHoverRadius: '11',
        valueFontColor: color
      },
      colorRange: {
        color: [
          {
            minValue: '0',
            maxValue: '1',
            label: '0',
            labelFontColor: '0075c2',
            code: '#f81828'
          },
          {
            minValue: '1',
            maxValue: '2',
            label: '1',
            code: '#f26432'
          },
          {
            minValue: '2',
            maxValue: '3',
            label: '2',
            code: '#f6901c'
          },
          {
            minValue: '3',
            maxValue: '4',
            label: '3',
            code: '#ffc324'
          },
          {
            minValue: '4',
            maxValue: '5',
            label: '4',
            code: '#fff100'
          },
          {
            minValue: '5',
            maxValue: '6',
            label: '5',
            code: '#7fc538'
          },
          {
            minValue: '6',
            maxValue: '7',
            label: '6',
            code: '#4bba45'
          },
          {
            minValue: '7',
            maxValue: '8',
            label: '7',
            code: '#33a84f'
          },
          {
            minValue: '8',
            maxValue: '9',
            label: '8',
            code: '#0cb7b6'
          },
          {
            minValue: '9',
            maxValue: '10',
            label: '9',
            code: '#478fce'
          },
          {
            minValue: '10',
            maxValue: '11',
            label: '10',
            code: '#3754a3'
          },
          {
            minValue: '11',
            maxValue: '12',
            label: '11',
            code: '#5a51a5'
          },
          {
            minValue: '12',
            maxValue: '13',
            label: '12',
            code: '#62469b'
          },
          {
            minValue: '13',
            maxValue: '14',
            label: '13',
            code: '#6b2184'
          },
          {
            minValue: '14',
            maxValue: '15',
            label: '14',
            code: '#491665'
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
            value: ph
          }
        ]
      },
      trendPoints: {
        point: [
          {
            startValue: '6.5',
            endValue: '8.5',
            displayValue: 'Recommended Ph Value (6.5 - 8.5)',
            alpha: '0'
          },
          {
            startValue: '6.5',
            color: '#dddddd',
            dashed: '1',
            dashlen: '3',
            dashgap: '3',
            thickness: '2',
            useMarker: '1',
            markerColor: '#0075c2',
            markerBorderColor: '#666666',
            markerRadius: '5'
          },
          {
            startValue: '8.5',
            color: '#dddddd',
            dashed: '1',
            dashlen: '3',
            dashgap: '3',
            thickness: '2',
            useMarker: '1',
            markerColor: '#0075c2',
            markerBorderColor: '#666666',
            markerRadius: '5'
          }
        ]
      }
    }
  };

  return <ReactFC {...chartConfigs} />;
};

export default Ph;
