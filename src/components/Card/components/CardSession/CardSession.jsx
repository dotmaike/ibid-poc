import './styles.scss';
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {teal600} from 'material-ui/styles/colors';
import AppBarTitle from '../../../AppBarTitle/AppBarTitle.jsx';

class CardSession extends Component{

    constructor(props){
        super(props);
    }

    render(){
      return(
          <Card
                style={{ height: '295px' }}>
              <CardTitle
                    title={<AppBarTitle
                        title="September 2017 bid session open"
                        subtitle="September 2, 2017 - September 22, 2017"
                        iconColor="white"
                        hasIcon={true}
                    />}
                    style={{ padding : '0', backgroundColor : teal600, borderRadius : '2px' }}
                    subtitleColor="#B2DFDB"
                    subtitleStyle={{ fontSize : '.8rem' }}
                    titleColor="#fff"
                    titleStyle={{ fontSize : '.8rem' }}
                />
              <CardText>
                  <div className="expanded row Session">
                      <div className="small-3 columns">
                          <div className="Session-ItemTitle">Status</div>
                          <div className="Session-ItemContent">OPEN</div>
                      </div>
                      <div className="small-3 columns">
                          <div className="Session-ItemTitle-Red">Days Left</div>
                          <div className="Session-ItemContent-Red">4</div>
                      </div>
                      <div className="small-6 columns">
                          <div className="Session-ItemTitle">Last saved changes</div>
                          <div className="Session-ItemContent">June 25th 2017</div>
                      </div>
                      <div className="small-12 columns">
                          <div className="Session-Button">
                              <RaisedButton
                                  label="Action"
                                  primary={true}
                                  style={{backgroundColor : "rgb(0, 137, 123)"}}
                                  labelColor="white"
                                  labelStyle={{padding : '0 75px'}}/>
                          </div>
                      </div>
                  </div>
              </CardText>
          </Card>
      );
    };

}

export default CardSession;
