import React from 'react';
// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Including the chart type
import Widgets from 'fusioncharts/fusioncharts.widgets';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme, CandyTheme);

const Battery = (props) => {
  const { battery, theme, color } = props;

  const chartConfigs = {
    type: 'vled', // The gauge type
    width: '200', // Width of the gauge
    height: '400', // Height of the gauge
    dataFormat: 'json', // Data type
    dataSource: {
      chart: {
        caption: 'Battery',
        lowerLimit: '0',
        upperLimit: '100',
        lowerLimitDisplay: 'Empty',
        upperLimitDisplay: 'Full',
        numberPrefix: 'Battery: ',
        numberSuffix: '%',
        valueFontSize: '12',
        showhovereffect: '1',
        origW: '400',
        origH: '150',
        ledSize: '3',
        ledGap: '2',
        manageResize: '1',
        valueFontColor: color,
        theme: theme
      },
      colorRange: {
        color: [
          {
            minValue: '0',
            maxValue: '45',
            code: '#e44a00'
          },
          {
            minValue: '45',
            maxValue: '75',
            code: '#f8bd19'
          },
          {
            minValue: '75',
            maxValue: '100',
            code: '#6baa01'
          }
        ]
      },
      value: battery
    }
  };

  return <ReactFC {...chartConfigs} />;
};

export default Battery;
