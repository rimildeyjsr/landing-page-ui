import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './circularProgress.css';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
  blackProgress: {
    margin: theme.spacing(2),
    color: 'black',
  }
}));

export default function CircularIndeterminate(props) {
  const classes = useStyles();
  return (
    <div className='circular-progress-div'>
      {
        props.showUploadProgress ?
          <CircularProgress
            className={classes.blackProgress}
            color='inherit'
          />
          :
          null
      }
    </div>
  );
}
