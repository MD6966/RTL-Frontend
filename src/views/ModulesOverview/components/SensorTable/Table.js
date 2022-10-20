/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import MUIDataTable from 'mui-datatables';
import {
  Grid,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Typography,
  Box,
  Tabs,
  Tab
} from '@material-ui/core';
import axios from 'axios';
import { makeConfig } from 'store/actions';
import { SensorModal, ModuleTagTextField, Rib, Tib, Dib } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  formControl: {
    width: '100%'
  },
  label: {
    backgroundColor: theme.palette.background.paper
  },
  results: {
    marginTop: theme.spacing(3)
  },
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  },
  heading: {
    marginBottom: theme.spacing(2)
  },
  tabs: {
    marginTop: theme.spacing(2)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const Table = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [tab, setTab] = useState(0);
  const [content, setContent] = useState({
    data: [],
    columns: [],
    title: 'Sensors'
  });

  const tabs = [
    { value: 0, label: 'Modules' },
    { value: 1, label: 'Recycle Bin' }
  ];

  const trashColumns = [
    {
      name: 'id',
      label: 'Module ID'
    },
    {
      name: 'board_id',
      label: 'Module Tag',
      options: {
        filter: false,
        customBodyRender: (val, tableMeta, updateValue) => (
          <ModuleTagTextField
            dashboard={value}
            tag={val}
          />
        )
      }
    },
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'users',
      label: 'Registered Users'
    },
    {
      name: 'delete',
      label: 'Delete Module',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <Dib
            del={del}
            value={value}
          />
        )
      }
    },
    {
      name: 'restore',
      label: 'Restore Module',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <Rib
            del={restore}
            value={value}
          />
        )
      }
    }
  ];

  const columns = [
    {
      name: 'id',
      label: 'Module ID'
    },
    {
      name: 'board_id',
      label: 'Module Tag',
      options: {
        filter: false,
        customBodyRender: (val, tableMeta, updateValue) => (
          <ModuleTagTextField
            dashboard={value}
            id={val.id}
            tag={val.board_id}
          />
        )
      }
    },
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'users',
      label: 'Registered Users'
    },
    {
      name: 'delete',
      label: 'Send Module To Trash',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <Tib
            del={sendToTrash}
            value={value}
          />
        )
      }
    }
  ];

  const dashboards = [
    {
      title: 'Fuel Monitoring System',
      link: 'fuel'
    },
    {
      title: 'Smart Farm Fisheries',
      link: 'lms',
      type: 'farm'
    },
    {
      title: 'Cold Chain Monitoring System',
      link: 'coldChain',
      type: 'store'
    },
    {
      title: 'CNC Monitoring System',
      link: 'led'
    },
    {
      title: 'Temperature Monitoring System',
      link: 'temp'
    },
    {
      title: 'Water Qualtiy Monitoring System',
      link: 'lms',
      type: 'qa'
    },
    {
      title: 'Fixed Asset Tracking System',
      link: 'coldChain',
      type: 'fa'
    },
    {
      title: 'Energy Monitoring System',
      link: 'em',
    
    },
    {
      title: 'Water Tank System',
      link: 'tank',
    
    },
    {
      title: 'Environment Monitoring System',
      link: 'env',
    
    },
    {
      title: 'Humidity & Temperature Monitoring System',
      link: 'humidity',
    },
    {
      title: 'Rectifier & Backup Battery Monitoring System',
      link: 'rectifier',
    },
    {
      title: 'Security System',
      link: 'security',
    },
    {
      title: 'Tubewell Monitoring System',
      link: 'tubewell'
    },
    {
      title: 'Smart Highway Lighting System',
      link: 'light'
    },
    {
      title: 'Smart Geyser System',
      link: 'geyser'
    }
  ];

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'scrollMaxHeight',
    selectableRows: 'none',
    fixedHeaderOptions: {
      xAxis: false,
      yAxis: true
    }
  };

  const getSensors = async (dashboard, index, config, type) => {
    setLoading(true);
    if (
      dashboard === 'Fuel Monitoring System' ||
      dashboard === 'CNC Monitoring System' ||
      dashboard === 'Temperature Monitoring System'||
      dashboard === 'Energy Monitoring System'||
      dashboard === 'Water Tank System' ||
      dashboard === 'Environment Monitoring System' ||
      dashboard === 'Humidity & Temperature Monitoring System' ||
      dashboard === 'Security System' ||
      dashboard === 'Rectifier & Backup Battery Monitoring System' ||
      dashboard === 'Tubewell Monitoring System' ||
      dashboard === 'Smart Highway Lighting System' ||
      dashboard === 'Smart Geyser System'
      
    ) {
      const data = await axios.post(
        `${process.env.REACT_APP_URL}${dashboards[index].link}/${type}`,
        config
      );      
      setLoading(false);
      setContent({
        data: data.data.data,
        columns: data.data.columns,
        title: data.data.title
      });
    } else if (
      dashboard === 'Smart Farm Fisheries' ||
      dashboard === 'Water Quality Monitoring System'
    ) {
      const data = await axios.post(
        `${process.env.REACT_APP_URL}${dashboards[index].link}/${type}/${dashboards[index].type}`,
        config
      );
      setLoading(false);
      setContent({
        data: data.data.data,
        columns: data.data.columns,
        title: data.data.title
      });
    } else {
      const data = await axios.post(
        `${process.env.REACT_APP_URL}${dashboards[index].link}/${type}/${dashboards[index].type}`,
        config
      );
      setLoading(false);
      setContent({
        data: data.data.data,
        columns: data.data.columns,
        title: data.data.title
      });
    }
  };

  const sendToTrash = async (id) => {
    const config = await makeConfig('application/json');
    const index = dashboards.findIndex((d) => d.title === value);
    const body = {
      id
    };
    const data = await axios.post(
      `${process.env.REACT_APP_URL}${dashboards[index].link}/sendToTrash`,
      body,
      config
    );
    const newArr = content.data.filter((d) => d.id !== id);
    setContent({
      ...content,
      data: newArr
    });
  };

  const restore = async (id) => {
    const config = await makeConfig('application/json');
    const index = dashboards.findIndex((d) => d.title === value);
    const body = {
      id
    };
    const data = await axios.post(
      `${process.env.REACT_APP_URL}${dashboards[index].link}/restore`,
      body,
      config
    );
    const newArr = content.data.filter((d) => d.id !== id);
    setContent({
      ...content,
      data: newArr
    });
  };

  const del = async (id) => {
    const config = await makeConfig('application/json');
    const index = dashboards.findIndex((d) => d.title === value);
    const body = {
      id
    };
    const data = await axios.post(
      `${process.env.REACT_APP_URL}${dashboards[index].link}/delete`,
      body,
      config
    );
    const newArr = content.data.filter((d) => d.id !== id);
    setContent({
      ...content,
      data: newArr
    });
  };

  const handleChange = async (event) => {
    setLoading(true);
    const index = dashboards.findIndex((d) => d.title === event.target.value);
    const config = await makeConfig('application/json');
    setValue(event.target.value);
    if (tab === 0) {
      getSensors(event.target.value, index, config, 'sensors');
    } else {
      getSensors(event.target.value, index, config, 'trash');
    }
  };

  const handleTabChange = async (event, val) => {
    let v = { val };
    setTab(v.val);
    const index = dashboards.findIndex((d) => d.title === value);
    const config = await makeConfig('application/json');
    if (v.val === 0) {
      getSensors(value, index, config, 'sensors');
    } else {
      getSensors(value, index, config, 'trash');
    }
  };

  return (
    <Grid container>
      <Grid
        item
        lg={12}
        xl={12}
        xs={12}
      >
        <Typography
          className={classes.heading}
          variant="h2"
        >
          Module List
        </Typography>
      </Grid>
      <Grid
        item
        lg={6}
        xl={6}
        xs={12}
      >
        <FormControl
          className={classes.formControl}
          variant="outlined"
        >
          <InputLabel
            className={classes.label}
            id="demo-mutiple-chip-label"
          >
            Select Dashboard
          </InputLabel>
          <Select
            id="demo-mutiple-chip"
            input={<OutlinedInput
              fullWidth
              id="select-multiple-chip"
            />}
            labelId="demo-mutiple-chip-label"
            MenuProps={MenuProps}
            onChange={handleChange}
            value={value}
          >
            {dashboards.map((d) => (
              <MenuItem
                key={d.title}
                value={d.title}
              >
                {d.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        lg={6}
        xl={6}
        xs={12}
      >
        <Box
          display="flex"
          justifyContent="center"
        >
          <SensorModal />
        </Box>
      </Grid>
      <Grid
        item
        lg={12}
        xl={12}
        xs={12}
      >
        {value !== '' ? (
          <Tabs
            className={classes.tabs}
            onChange={handleTabChange}
            scrollButtons="auto"
            value={tab}
            variant="scrollable"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </Tabs>
        ) : null}
      </Grid>
      <Grid
        item
        lg={12}
        xl={12}
        xs={12}
      >
        <div className={classes.results}>
          {isLoading ? (
            <CircularProgress />
          ) : !isLoading && content.data.length !== 0 && tab === 0 ? (
            <MUIDataTable
              columns={columns}
              data={content.data}
              options={options}
              title={content.title}
            />
          ) : !isLoading && content.data.length !== 0 && tab === 1 ? (
            <MUIDataTable
              columns={trashColumns}
              data={content.data}
              options={options}
              title={content.title}
            />
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default Table;
