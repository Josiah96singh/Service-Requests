import React, { Component } from 'react'
import '../App.css';
import { withRouter } from "react-router-dom";
import Navbar from '../components/navBar'
import Table from '../components/table'
import Statusbar from '../components/statusBar' 
import Filterbar from '../components/filterBar'
import Drawerbar from '../components/drawerBar'
import { getRequestsData, createRequest } from '../actions/requestsActions'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  tableContainer: {
    width: '50%'
  },
});

class serviceRequests extends Component {
  constructor(props) {
    super(props)
    this.state= {
      reqName: '',
      reqType: '',
      reqId: '',
      reqDescription: '',
      reqPriority: '',
      reqStatus: true,
      right: false,
      notification: false,
      search: ''
    }

    this.onFilterSearch= this.onFilterSearch.bind(this)
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    // this.onFilterFields = this.onFilterFields.bind(this)
  }


  componentDidMount() {
    this.props.getRequestsData();
  }

  toggleDrawerOpen = () => {
    this.setState({right: true})
  }

  toggleDrawerClose = () => {
    this.setState({right: false})
  }

  toggleNotificationClose = () => {
    this.setState({notification: false})
  }

  onFilterSearch(e) {
    this.setState({search: e.target.value.substr(0,20)})
  }

  // onFilterFields(data) {
  //   this.setState({search: data})
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }

  onSelect(e) {
    this.setState({reqType: e.target, reqPriority: e.target})
  }


  onSubmitRequest = (e) => {
    const { reqName, reqId, reqDescription, reqStatus, reqType, reqPriority } = this.state;
    e.preventDefault();

    const requestData = {
      created_at: new Date(),
      name: reqName,
      description: reqDescription,
      priority: null,
      status: reqStatus,
      type: null,
      userID: reqId
    }

    this.props.createRequest(requestData)
    this.toggleDrawerClose()
    this.setState({notification: true})
    this.props.getRequestsData()
  }

  render() {
    const { requests } = this.props.requests
    const { reqName, reqId, reqDescription, reqPriority, reqType, right } = this.state;
    const { classes } = this.props;
    console.log(this.state.reqPriority)
    
    return (
      <div className='Home-Container'>
        <div className="Nav-Section">
        <Navbar/>
        </div>
        <div className="Body-Section">
        <div className="Filter-Section">
        <Filterbar filterSearch={this.onFilterSearch} filterFields={this.filterFields}/>
          </div>
        <div className='Status-Section'>
        <Statusbar toggleDrawer={this.toggleDrawerOpen} />
        </div>
        <div className='Table-Section'>
        <Table className={classes.tableContainer} requests={requests} search={this.state.search}/>
        {/* {this.state.notification === true?  
        <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        message="Request created successfully"
        onClose={this.toggleNotificationClose}
        /> : <h1>Nope</h1>} */}
        </div>

        <div className='Drawer-Section'>
          <Drawerbar 
          onChange={this.onChange} 
          reqName={reqName}
          reqDescription={reqDescription}
          reqPriority={reqPriority}
          reqType={reqType}
          onSelect={this.onSelect}
          reqId={reqId}
          right={right}
          toggleDrawerOpen={this.toggleDrawerOpen}
          toggleDrawerClose={this.toggleDrawerClose} 
          submitRequest={this.onSubmitRequest}  />
        </div>
      </div>
      </div>
    )
  }
}

serviceRequests.propTypes = {
  getRequestsData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  requests: state.requests
});

export default connect(mapStateToProps, {getRequestsData, createRequest})(withStyles(styles)(withRouter((serviceRequests))));

