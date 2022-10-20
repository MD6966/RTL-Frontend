import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Chart from 'react-google-charts';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative'
  }
}));

const Timeline = (props) => {
  const { className, data, index, ...rest } = props;

  const classes = useStyles();
  const [results] = useState([]);
  const loading = useSelector((state) => state.led.led[index].charts.isLoading);

  useEffect(() => {
    if (data !== null) {
      results.push(data.options);

      if (data.red !== undefined) {
        data.red.forEach((r) => {
          let arr = [
            r.color,
            r.color,
            new Date(r.created_at),
            new Date(r.updated_at)
          ];

          results.push(arr);
        });
      }

      if (data.green !== undefined) {
        data.green.forEach((r) => {
          let arr = [
            r.color,
            r.color,
            new Date(r.created_at),
            new Date(r.updated_at)
          ];

          results.push(arr);
        });
      }

      if (data.yellow !== undefined) {
        data.yellow.forEach((r) => {
          let arr = [
            r.color,
            r.color,
            new Date(r.created_at),
            new Date(r.updated_at)
          ];

          results.push(arr);
        });
      }

      if (data.off !== undefined) {
        data.off.forEach((r) => {
          let arr = [
            r.color,
            r.color,
            new Date(r.created_at),
            new Date(r.updated_at)
          ];

          results.push(arr);
        });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <Chart
          chartType="Timeline"
          data={results}
          height={'99%'}
          loader={<CircularProgress color="secondary" />}
          options={{
            timeline: {
              colorByRowLabel: true
            },
            colors: ['#8b1a1a', '#006400', '#cdad00', '#1a1a1a']
          }}
          rootProps={{ 'data-testid': '2' }}
          width={'100%'}
        />
      )}
    </div>
  );
};

Timeline.propTypes = {
  className: PropTypes.string
};

export default Timeline;
