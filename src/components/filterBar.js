import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Select from 'react-select'
import TextField from '@material-ui/core/TextField';
import {reqPriorityOptions} from '../sampleData'
import {reqStatusOptions} from '../sampleData'
import {reqTypeOptions} from '../sampleData'


const drawerWidth = 250;

const styles = theme => ({
    root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 1,
        position:'relative'
      },
      drawerPaper: {
        width: drawerWidth,
        top: '4em',
        backgroundColor: '#F8F8F8',	
      },
      inputGroup: {
        padding: '10px'
      },
      input: {
        width: '12em',
        height: 40
      },
  });
  

class filterBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className='Filter-Container'>
            <Drawer 
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
              }}>
            <h3>Filter</h3>

            {/* FREE FILTERING */}
            <div className={classes.inputGroup}>
            <p>Search</p>
             <TextField
             placeholder="Search"
             className={classes.input}
             id="filled-search"
             type="search"
             onChange={this.props.filterSearch}
              />
            </div>

            {/* TYPE FILTER */}
            <div className={classes.inputGroup}>
            <p>Request Types</p>
            <Select
            className={classes.input}
            value={this.props.reqType}
            options={reqTypeOptions}
            onChange={this.props.onTypeSelect} />
            </div>


             {/* PRIORITY FILTER */}
            <div className={classes.inputGroup}>
            <p>Priority</p>
            <Select
            className={classes.input}
            value={this.props.reqPriority}
            options={reqPriorityOptions}
            onChange={this.props.onPrioritySelect} />
            </div>

             {/* STATUS FILTER */}
            <div className={classes.inputGroup}>
            <p>Status</p>
            <Select
            className={classes.input}
            options={reqStatusOptions} />
            </div>

               
            </Drawer>
        </div>
        )
    }
}

export default withStyles(styles)(filterBar);
