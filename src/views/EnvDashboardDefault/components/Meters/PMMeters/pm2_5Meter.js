/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  makeStyles
} from '@material-ui/core';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';


ReactFC.fcRoot(FusionCharts, charts, FusionTheme);


const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    textAlign: 'center',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(3, 2),
    '&:not(:last-of-type)': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }
}));

function PM2_5_Meter({ className, pm2_5, upperLmt, theme, ...rest }) {
  const classes = useStyles();
  const dataSource = {
    chart: {
      captionpadding: '0',
      origw: '320',
      origh: '300',
      gaugeouterradius: '115',
      gaugestartangle: '270',
      gaugeendangle: '-25',
      showvalue: '1',
      valuefontsize: '30',
      majortmnumber: '13',
      majortmthickness: '2',
      majortmheight: '13',
      minortmheight: '7',
      minortmthickness: '1',
      minortmnumber: '1',
      showgaugeborder: '0',
      theme: theme
    },
    colorrange: {
      color: [
        {
          minvalue: 0,
          maxvalue: pm2_5,
          code: '#999999'
        },
        {
          minvalue: 0,
          maxvalue: upperLmt,
          code: '#F6F6F6'
        }
      ]
    },
    dials: {
      dial: [
        {
          value: pm2_5,
          bgcolor: '#F20F2F',
          basewidth: '30'
        }
      ]
    },
    annotations: {
      groups: [
        {
          items: [
            {
              type: 'text',
              id: 'text',
              text: 'µg/m3',
              x: '$gaugeCenterX',
              y: '$gaugeCenterY + 55',
              fontsize: '15',
              color: '#555555'
            }
          ]
        }
      ]
    }
  };


  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="PM-2.5"
      />
      <Divider />
      <Box
        minHeight={320}
        p={1}
        position="relative"
      >
        <ReactFC
          dataFormat="JSON"
          dataSource={dataSource}
          height="100%"
          type="angulargauge"
          width="100%"
        />
      </Box>
      <Divider />

    </Card>
  );
}

PM2_5_Meter.propTypes = {
  className: PropTypes.string
};

export default PM2_5_Meter;
