import React from 'react'
import Button from '@material-ui/core/Button';

class statusBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
   
    render() {
        const { toggleDrawer } = this.props;
        return (
            <div className='Status-Container'>
                 <Button className='button' onClick={toggleDrawer} variant="contained" color="primary">New Service Request</Button>
            </div>
        );
    }
}

export default statusBar;