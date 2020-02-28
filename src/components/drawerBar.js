import React from 'react'
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Select from 'react-select'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {reqTypeOptions, reqPriorityOptions} from '../sampleData' 

const useStyles = makeStyles({
    drawer: {
        width: 80
      },
      inputGroup: {
        padding: '20px'
      },
      input: {
        width: '20em',
        height: 30
      },
      textAreaInput: {
        width: '20em',
        height: 50,
        paddingBottom: 20
      },
      drawerTitle: {
        textAlign: 'start',
        padding: '15px',
        marginBottom: 0,
        fontWeight: 500,
        textTransform: 'uppercase',
          },
          btn: {
            width: 80,
          }
  });


export default function drawerBar(props) {
     // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
    const { 
        toggleDrawerClose, 
        onChange, 
        onSelect,
        submitRequest, 
        right, 
        reqDescription, 
        reqId, 
        reqName, 
        reqPriority, 
        reqType } = props;

    return (
        <div className='Drawer-Container'>
        <Drawer className={classes.drawer} anchor="right" open={right} onClose={toggleDrawerClose}>
        <h3 className={classes.drawerTitle}>Create new service request</h3>
        
        {/* REQUEST NAME */}
        <div className={classes.inputGroup}>
        <p>Request name</p>
        <TextField
        className={classes.input}
        name="reqName"
        variant="outlined"
        id="standard-basic"
        label="Type"
        value={reqName}
        onChange={onChange} />
        </div>

        {/* REQUEST TYPE */}
        <div className={classes.inputGroup}>
		<p>Request Type</p>
		<Select
        className={classes.input}
        name="reqType"
        onChange={onSelect} 
        options={reqTypeOptions}
        value={reqType} 
        />
				</div> 

        {/* USER ID */}    
        <div className={classes.inputGroup}>
        <p>ID</p>
        <TextField
       className={classes.input}
       variant="outlined"
       name="reqId"
       id="standard-basic"
       label="Type"
        value={reqId}
        onChange={onChange}/>
        </div>

        {/* REQUEST DESCRIPTION */}
        <div  className={classes.inputGroup}>
        <p>Description</p>
        <TextField
          className={classes.textAreaInput}
          variant="outlined"
          name="reqDescription"
          id="standard-multiline-static"
          label="Type"
          multiline
          rows="4"
          defaultValue={reqDescription}
          onChange={onChange}
        />
        </div>

        {/* REQUEST PRIORITY */}
        <div className={classes.inputGroup}>
		<p>Priority</p>
		<Select
        className={classes.input}
        name="reqPriority"
        onChange={onSelect} 
        options={reqPriorityOptions}
        value={reqPriority}
         />
				</div>

        <div className='Drawer-Buttons'>
        <Button 
        className={classes.btn}
        onClick={toggleDrawerClose} 
        variant="contained" 
        color="primary">Cancel
        </Button>
        <br/>
        <Button 
         className={classes.btn}
        onClick={submitRequest} 
        variant="contained" 
        color="primary">Send
        </Button>
        </div>
     
      </Drawer>
        </div>
    )
}
