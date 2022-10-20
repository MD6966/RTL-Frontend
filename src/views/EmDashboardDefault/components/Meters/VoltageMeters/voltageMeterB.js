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

function VoltageMeterB({ className,Vb, upperLmt, lowerLmt, theme, color, ...rest }) {
  const classes = useStyles();
  let minvalue;
  let maxvalue;
  let code;
  let Status;

  if (Vb < lowerLmt) {
    minvalue = lowerLmt;
    maxvalue = upperLmt;
    code = '#d32f2f';
    Status = 'Below from it\'s lowerlimit';
  } else if (Vb > upperLmt) {
    minvalue = lowerLmt;
    maxvalue = upperLmt;
    code = '#d32f2f';
    Status = 'Exceeding above it\'s upperlimit';
  } else if (Vb <= upperLmt && Vb >= lowerLmt) {
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
      valuefontsize: '15'
    },
    colorrange: {
      color: [


        {

          minvalue,
          maxvalue,
          code
        }
        // {
        //   minvalue: V_lowerLmt[0],
        //   maxvalue: V_upperLmt[0],
        //   code: '#62B58F'
        // },
        // {
        //   minvalue: V_upperLmt[0],
        //   maxvalue: V_upperLmt[0] + 10,
        //   code: '#F2726F'
        // }
      ]
    },
    dials: {
      dial: [
        {
          value: Vb,
          tooltext: 'Voltages phase-B'
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
        // action={<GenericMoreButton />}
        title="VOLTAGES  (Phase-B)"
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

VoltageMeterB.propTypes = {
  className: PropTypes.string
};

export default VoltageMeterB;
