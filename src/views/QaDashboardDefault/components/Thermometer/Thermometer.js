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

  const { temperature } = props;

  const chartConfigs = {
    type: 'thermometer', // The gauge type
    width: '250', // Width of the gauge
    height: '400', // Height of the gauge
    dataFormat: 'json', // Data type
    dataSource: {
      'chart': {
        'caption': 'Temperature Monitor',
        'subcaption': 'Fuel Monitoring System',
        'lowerLimit': '0',
        'upperLimit': '100',
        'decimals': '1',
        'numberSuffix': '°C',
        'showhovereffect': '1',
        'thmFillColor': '#008ee4',
        'showGaugeBorder': '1',
        'gaugeBorderColor': '#008ee4',
        'gaugeBorderThickness': '2',
        'gaugeBorderAlpha': '30',
        'thmOriginX': '100',
        'chartBottomMargin': '20',
        'showValue': '1',
        'adjustTM': '1',
        'ticksOnRight': '0',
        'tickMarkDistance': '5',
        'tickValueDistance': '2',
        'majorTMNumber': '9',
        'majorTMHeight': '12',
        'minorTMNumber': '4',
        'minorTMHeight': '7',
        'tickValueStep': '2',
        'majorTMColor': '#666666',
        'majorTMAlpha': '100',
        'majorTMThickness': '2',
        'minorTMColor': '#666666',
        'minorTMAlpha': '50',
        'minorTMThickness': '1',
        'valueFontColor': '#000000',
        'theme': 'fusion'
      },
      'value': temperature,
    }
  };

  return (
    <ReactFC
      {...chartConfigs}
    />
  )
}

export default Thermometer;
