import React from 'react'
import { Tab, Paper, makeStyles, Tabs } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Home from './HomePage'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;


    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
}
    
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div id='navBar'>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Link to='/' onClick={() => setValue(0)} > <Tab label="Home" > <Home/> </Tab> </Link>
                    <Tab label="Resume" target='_blank' href='https://bayleyarens.com/Resume.pdf'/>
                    <Link to='/projects' onClick={() => setValue(2)}> <Tab label="Projects"> </Tab> </Link>
                </Tabs>
            </Paper>
        </div>
    )
}
