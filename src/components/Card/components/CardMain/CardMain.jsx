import React, {Component} from 'react';
/** Material UI Components **/
import {Card, CardHeader, CardText} from 'material-ui/Card';
/** Custom Components **/
import CardBid from '../CardBid/CardBid.jsx';
import CardCalendar from '../CardCalendar/CardCalendar.jsx';
import CustomCard from '../Card/Card.jsx';
import CardSession from '../CardSession/CardSession.jsx';
import CardCheckbox from '../CardCheckbox/CardCheckbox.jsx'
import CardHistory from './../CardHistory/CardHistory.jsx';

const CardMain = (props) => (
    <div className="expanded row main-container">
        <Card
            style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                paddingTop: '80px'
            }}>
            <CardHeader
                title="Welcome, Bessie"
                subtitle="You last visited on Wednesday November 23, 2017 at 15:44 (EST)"
                style={{
                    paddingLeft : '30px',
                }}
                titleStyle={{
                    fontSize : '1.7rem',
                    fontWeight : '400'
                }}
            />
            <CardText>
                <div className="expanded row">
                    <div className="medium-6 columns card">
                        <CustomCard/>
                    </div>
                    <div className="medium-6 columns card">
                        <CardCheckbox/>
                    </div>
                </div>
                <div className="expanded row">
                    <div className="medium-6 columns card">
                        <CardSession/>
                    </div>
                    <div className="medium-6 columns card">
                        <CardHistory/>
                    </div>
                </div>
                <div className="medium-12 columns card">
                    <CardCalendar />
                </div>
                <div className="medium-12 columns card">
                    <CardBid />
                </div>
            </CardText>
        </Card>
    </div>
);

export default CardMain;
