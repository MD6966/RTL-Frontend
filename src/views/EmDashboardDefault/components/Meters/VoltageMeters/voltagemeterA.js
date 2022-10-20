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

function VoltageMeterA({ className,Va ,upperLmt, lowerLmt,theme, ...rest }) {
  const classes = useStyles();
  let minvalue;
  let maxvalue;
  let code;
  let Status;

  if (Va < lowerLmt) {
    minvalue = lowerLmt;
    maxvalue = upperLmt;
    code = '#d32f2f';
    Status = 'Below from it\'s lowerlimit';
  } else if (Va > upperLmt) {
    minvalue = lowerLmt;
    maxvalue = upperLmt;
    code = '#d32f2f';
    Status = 'Exceeding above it\'s upperlimit';
  } else if (Va <= upperLmt && Va >= lowerLmt) {
    minvalue = lowerLmt;
    maxvalue = upperLmt;
    code = '#388E3C';
    Status = 'Status : OK';
  }
  const dataSource = {
    chart: {
      caption: ` ${Status}`,
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
        },

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
          value: Va,
          tooltext: 'Voltages phase-A'
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
        title="VOLTAGES  (Phase-A)"
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
      {/* <Box display="flex">
        {earnings.labels.map((label, i) => (
          <div
            key={label}
            className={classes.item}
          >
            <Typography
              variant="h4"
              color="textPrimary"
            >
              {earnings.datasets[0].data[i]}
              %
            </Typography>
            <Typography
              variant="overline"
              color="textSecondary"
            >
              {label}
            </Typography>
          </div>
        ))}
      </Box> */}
    </Card>
  );
}

VoltageMeterA.propTypes = {
  className: PropTypes.string
};

export default VoltageMeterA;
