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

const Tank = (props) => {
  const { fill, name, theme, color } = props;

  const chartConfigs = {
    type: 'cylinder', // The gauge type
    width: '200', // Width of the gauge
    height: '400', // Height of the gauge
    dataFormat: 'json', // Data type
    dataSource: {
      chart: {
        theme: theme,
        caption: 'Lower Tank',
        subcaption: name,
        lowerLimit: '0',
        upperLimit: '100',
        lowerLimitDisplay: 'Empty',
        upperLimitDisplay: 'Full',
        numberSuffix: ' %',
        cylFillColor: '#80c5de',
        showValue: '1',
        valueFontColor: color,
        chartBottomMargin: '20'
      },
      value: fill
    }
  };

  return <ReactFC {...chartConfigs} />;
};

export default Tank;
