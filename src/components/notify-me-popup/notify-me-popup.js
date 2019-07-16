import React, {Component} from 'react';
import "./notify-me-popup.css";
import crossButton from "../../images/baseline-clear.svg";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import grey from '@material-ui/core/colors/grey';
import emailIcon from "../../images/baseline-email.svg";
import accountIcon from "../../images/baseline-account_circle.svg";

const useStyles = theme => ({
  textField: {
    width: 328,
    marginBottom: 16,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
});

export class NotifyMePopup extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return(
      <div className='notify-me-wrapper'>
        <div className='notify-me-inner'>
          <img
            onClick={this.props.closeLightBox}
            src={crossButton}
            className='cross-button'
          />

          <h3 className='notify-me-text'>NOTIFY ME</h3>

          <ThemeProvider theme={theme}>
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={accountIcon} />
                  </InputAdornment>
                ),
              }}
            />
          </ThemeProvider>

          <ThemeProvider theme={theme}>
            <TextField
              id="email-msg"
              label="Email"
              className={classes.textField}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={emailIcon} />
                  </InputAdornment>
                ),
              }}
            />
          </ThemeProvider>

          <div className='disclaimer-text'>
            We promise not to spam you! <br/>
            We will only send out an email once we are ready for launch.
          </div>

          <button className='submit-button'>
            SUBMIT
          </button>
        </div>
      </div>
    )
  }
}

export default withStyles(useStyles()) (NotifyMePopup);
