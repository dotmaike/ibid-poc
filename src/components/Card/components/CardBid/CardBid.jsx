import React, {Component} from 'react';
import {render} from 'react-dom';
/** Material UI Components **/
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import AppBarTitle from './../../../AppBarTitle/AppBarTitle.jsx';
import TabCustom from './Tab.jsx';

class CardBid extends Component {
    constructor(props) {
        super(props);

        this._handleRequestClose = this._handleRequestClose.bind(this);
        this._handleTouchTap = this._handleTouchTap.bind(this);

        this.state = {
            open: false
        };
    }

    _handleRequestClose() {
        this.setState({open: false});
    }

    _handleTouchTap() {
        this.setState({open: true});
    }

    render() {
        const actions = [
            <RaisedButton
                className="cancelButton"
                style={{marginRight: 20}}
                label="Cancel"
                primary={true}
                onTouchTap={this._handleRequestClose} />,
            <RaisedButton
                className="goButton"
                label="Next"
                primary={true}
                onTouchTap = {this._handleRequestClose} />
        ];

        return (
            <div>
                <Card
                    style={{
                        marginTop: 20,
                    }}>
                    <CardTitle
                        title="Bid ranking"
                        subtitle="Review and edit your bids and priority ranking"
                        style={{backgroundColor: '#F7F7F7',borderRadius: '2px'}}/>
                    <FloatingActionButton
                        style={{marginTop: -28, position: 'absolute', right: 94, zIndex: 1111}}
                        backgroundColor={'#F44336'}
                        onTouchTap={this._handleTouchTap}>
                        <ContentAdd/>
                    </FloatingActionButton>
                    <CardText>
                        <Table selectable={false}>
                           <TableHeader adjustForCheckbox={false} displaySelectAll={false} style={{borderBottom: 0}}>
                             <TableRow displayBorder={false}>
                               <TableHeaderColumn className="medium-1"></TableHeaderColumn>
                               <TableHeaderColumn className="medium-10">BID</TableHeaderColumn>
                               <TableHeaderColumn className="medium-1"></TableHeaderColumn>
                             </TableRow>
                           </TableHeader>
                           <TableBody displayRowCheckbox={false}>
                             <TableRow displayBorder={false}>
                               <TableRowColumn className="medium-1">1</TableRowColumn>
                               <TableRowColumn className="medium-10">Desire morning starts</TableRowColumn>
                               <TableRowColumn className="medium-1">
                                   <IconMenu
                                      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                      targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                                      <MenuItem primaryText="Send feedback" />
                                      <MenuItem primaryText="Settings" />
                                      <MenuItem primaryText="Help" />
                                    </IconMenu>
                                </TableRowColumn>
                             </TableRow>
                             <TableRow displayBorder={false}>
                               <TableRowColumn>2</TableRowColumn>
                               <TableRowColumn>Desire </TableRowColumn>
                               <TableRowColumn>
                                   <IconMenu
                                      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                      targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                                      <MenuItem primaryText="Send feedback" />
                                      <MenuItem primaryText="Settings" />
                                      <MenuItem primaryText="Help" />
                                    </IconMenu>
                               </TableRowColumn>
                             </TableRow>
                             <TableRow displayBorder={false}>
                               <TableRowColumn>3</TableRowColumn>
                               <TableRowColumn>Stephanie Sanders</TableRowColumn>
                               <TableRowColumn>
                                   <IconMenu
                                      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                      targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                                      <MenuItem primaryText="Send feedback" />
                                      <MenuItem primaryText="Settings" />
                                      <MenuItem primaryText="Help" />
                                    </IconMenu>
                               </TableRowColumn>
                             </TableRow>
                             <TableRow displayBorder={false}>
                               <TableRowColumn>4</TableRowColumn>
                               <TableRowColumn>Steve Brown</TableRowColumn>
                               <TableRowColumn>
                                   <IconMenu
                                      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                      targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                                      <MenuItem primaryText="Send feedback" />
                                      <MenuItem primaryText="Settings" />
                                      <MenuItem primaryText="Help" />
                                    </IconMenu>
                               </TableRowColumn>
                             </TableRow>
                           </TableBody>
                         </Table>
                    </CardText>
                </Card>
                <Dialog
                    title={
                        <AppBarTitle
                            title="Add a new preference"
                            titleColor="#FFFFFF"
                            subtitle="Select and configure a new preference to add to your bids." subtitleColor="#FFFFFF"
                            backgroundColor="#3F51B5"
                            color="#FFFFFF"
                        />}
                    open={this.state.open}
                    actions={actions}
                    actionsContainerStyle={{
                        backgroundColor: '#F5F5F5'
                    }}
                    onRequestClose={this._handleRequestClose}>
                    <TabCustom/>
                </Dialog>
            </div>
        );
    }
}

export default CardBid;
