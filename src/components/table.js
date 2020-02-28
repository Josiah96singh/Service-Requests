import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
  },
  tableRoot: {
    boxShadow: 'none'
  }
});


function table(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  const requests = props.requests;

  // FILTER REQUEST DATA BASED ON PARENT PROPS
  let filteredRequestes = requests.filter(
    (request) => {
      return request.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1;
    }
  )

  return (
    <div className='Table-Container'>
    <TableContainer className={classes.tableRoot} component={Paper}>
      <Table
      className={classes.table}
      padding='default'
      size="small"
      aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell><b>Created</b></TableCell>
            <TableCell><b>Request name</b></TableCell>
            <TableCell><b>Request type</b></TableCell>
            <TableCell><b>ID</b></TableCell>
            <TableCell><b>Description</b></TableCell>
            <TableCell><b>Priority</b></TableCell>
            <TableCell><b>Status</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRequestes.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {moment(item.created_at.toDate()).format('DD-MM-YYYY hh:mm')}
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.userID}</TableCell>
              <TableCell>{item.description ? item.description.substring(0, 15) + '...' : 'null'}</TableCell>
              <TableCell>{item.priority}</TableCell>
              <TableCell>{item.status === true? 'Open' : 'Closed'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default table;