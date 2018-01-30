import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import AppBarTitle from '../../../AppBarTitle/AppBarTitle.jsx';

class TabCustom extends Component{

    constructor(props){
        super(props);
        this.state = {
          slideIndex: 0,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({
          slideIndex: value,
        });
     }

    render(){
      const textCard = {
        backgroundColor: '#3F51B5',
        borderRadius: '2px',
      };
      const titleStyle = {
          fontSize: '20px',
      }
    const styles = {
        headline: {
            fontSize: 24,
            paddingTop: 16,
            marginBottom: 12,
            fontWeight: 400,
        },
        block: {
            maxWidth: 250,
        },
        radioButton: {
            marginBottom: 16,
        },
        slide: {
            padding: 10,
        }
    }
    const tabCustomStyles = {
        backgroundColor: 'white',
        color: 'black',
        padding: '15px 0 10px 0'
    }

      return(

          <div>
              <Tabs
                  onChange={this.handleChange}
                  value={this.state.slideIndex}
                  inkBarStyle={{backgroundColor:'#2980b9'}}>
                  <Tab label="TIME OFF" value={0} style={tabCustomStyles}/>
                  <Tab label="WORK PREFERENCES" value={1}style={tabCustomStyles} />
                  <Tab label="DESTINATION & LAYOVER" value={2} style={tabCustomStyles}/>
                  <Tab label="CHECK-IN & CHECK-OUT" value={3} style={tabCustomStyles}/>
                </Tabs>
                <SwipeableViews
                  index={this.state.slideIndex}
                  onChangeIndex={this.handleChange}>
                  <div className="Radio-Group">
                    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                        <RadioButton
                            value="not_light"
                            label={<AppBarTitle
                                title="Specific Date Off"
                                subtitle="Request to be off on a specific date. Only applicable within the bid period."
                            />}
                            style={styles.radioButton}
                            />
                        <RadioButton
                            value="light"
                            label={<AppBarTitle
                                title="Day of Week Off"
                                subtitle="Request to be off on a specific day of the week (i.e. Monday, Tuesday, Wednesday, etc.)"
                            />}
                            style={styles.radioButton}
                        />
                        <RadioButton
                            value="lighter"
                            label={<AppBarTitle
                                title="Period Of Dates Off"
                                subtitle="Request a period of dates off. Only applicable within the bid period. A requested period conflicting with a carry-in is automatically adjusted to start at the end of the carry-in."
                            />}
                            style={styles.radioButton}
                        />
                        <RadioButton
                            value="lighten"
                            label={<AppBarTitle
                                title="String of Dates Off"
                                subtitle="Request a string of Dates Off. Points are awarded for each awarded date off in an unbroken string beginning with the first specified date."
                            />}
                            style={styles.radioButton}
                        />
                    </RadioButtonGroup>
                  </div>
                  <div style={styles.slide}>
                    2
                  </div>
                  <div style={styles.slide}>
                    3
                  </div>
                  <div style={styles.slide}>
                    4
                  </div>
                </SwipeableViews>
          </div>
      );
    };

}

export default TabCustom;
