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

function VoltageMeterC({ className, Vc, lowerLmt, upperLmt, theme, ...rest }) {
  const classes = useStyles();
  let minvalue;
  let maxvalue;
  let code;
  let Status;

  if (Vc < lowerLmt) {
    minvalue = lowerLmt;
    maxvalue = upperLmt;
    code = '#d32f2f';
    Status = 'Below from it\'s lowerlimit';
  } else if (Vc > upperLmt) {
    minvalue = lowerLmt;
    maxvalue = upperLmt;
    code = '#d32f2f';
    Status = 'Exceeding above it\'s upperlimit';
  } else if (Vc <= upperLmt && Vc >= lowerLmt) {
    minvalue = lowerLmt;
    maxvalue = upperLmt;
    code = '#388E3C';
    Status = 'Status : OK';
  }

  const dataSource = {
    chart: {
      caption: ` ${Status} `,
      captionfontsize: 12,
      captionontop: '0',
      origw: '400',
      origh: '200',
      gaugestartangle: '135',
      gaugeendangle: '45',
      gaugeoriginx: '200',
      gaugeoriginy: '240',
      gaugeouterradius: '190',
      theme: theme,
      showvalue: '1',
      numbersuffix: 'V',
      valuefontsize: '20'
    },
    colorrange: {
      color: [


        {

          minvalue,
          maxvalue,
          code
        }
        // {
        //   minvalue: '190',
        //   maxvalue: '240',
        //   code: '#FFC533'
        // },
        // {
        //   minvalue: '241',
        //   maxvalue: '1000',
        //   code: '#F2726F'
        // }
      ]
    },
    dials: {
      dial: [
        {
          value: Vc,
          tooltext: 'Voltages phase-C'
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
        title="VOLTAGES  (Phase-C)"

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

VoltageMeterC.propTypes = {
  className: PropTypes.string
};

export default VoltageMeterC;
