/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import withRoot from '../components/withRoot';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 200
  },
};

class Index extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

   whereAreWeGoing = async () => {
    const res = await fetch('http://localhost:3001/destination')
    const text = await res.text();
    this.setState({
      open: true,
      destination: text
    })
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Where to? </DialogTitle>
          <DialogContent>
            <DialogContentText>{this.state.destination}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleRequestClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography type="display1" gutterBottom>
          Funsurance
        </Typography>
        <Typography type="subheading" gutterBottom>
          Everyday insurance Track
        </Typography>
        <Button raised color="accent" onClick={this.whereAreWeGoing}>
          Go
        </Button>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
