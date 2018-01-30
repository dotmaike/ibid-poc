import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import Input from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RButton from 'material-ui/RaisedButton';
import FButton from 'material-ui/FlatButton';
import Altitud from './Altitude.jsx';
import Paper from 'material-ui/Paper';
import Icon from '../../components/common/FAIcon.jsx';

class Login extends Component {
  render() {
    const style = {
      height: 600,
      width: 380,
      paddingTop: 80,
      display: 'inline-block',
    };

    const inputText = {
      backgroundColor: '#fff',
      height: '45px',
      marginTop: '30px',
      textIndent: '10px',
    };

    const hintText = {
      left: '8px',
      top: '43px',
      zIndex: 11,
    };

    const bannerFont = {
      fontSize: '72px',
      fontWeight: '300',
      letterSpacing: '8px'
    };

    const floatinglabel = {
      color:'#fff',
      fontSize: '15px',
      lineHeight: '0px',
      width: '350px',
      textIndent:'1px',
      textAlign: 'left',
    }

    return (
      <div className="bgLogin">
        <section className="loginWrapper">
          <div style={style} >
            <Altitud size={bannerFont} />
            <article>
              <div>
                <Input
                  inputStyle={inputText}
                  underlineShow={false}
                  hintText="Username"
                  hintStyle={hintText}
                  floatingLabelText="Please login to access your crew bidding interface"
                  floatingLabelFixed={true} floatingLabelStyle={floatinglabel}
                />
              </div>
              <div>
                <Input
                  inputStyle={inputText} underlineShow={false}
                  hintText="Password" hintStyle={hintText} type="password"
                />
              </div>
              <div className="btnWrapper">
                <Link to="/home">
                  <i className="fa fa-arrow-right" aria-hidden="true" style={{color: '#fff'}}></i>
                </Link>
              </div>
            </article>
          </div>
        </section>
        <footer className="Login-Footer">
            <div><figure>
                <img src="../../img/adopt_logo.png" />
            </figure></div>
            <div className="loginDisclaimer">
                <span>AD OPT Crew interface</span> is a registered trademark of Kronos Incorporated
            </div>
        </footer>
      </div>
    );
  }
}

export default Login;
