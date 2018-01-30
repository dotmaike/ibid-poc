import React from 'react';
/** Material UI Components **/
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import {Card, CardMedia, CardHeader, CardTitle} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
/** Custom Components **/
import Icon from '../../components/common/FAIcon.jsx';
import Logo from '../../components/common/Logo.jsx';
import CardMain from '../../components/Card/components/CardMain/CardMain.jsx';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        const iconStyles = {
            marginRight: 24
        };
        return (
            <main>
                <AppBar
                    title={<Logo versionText={true} />}
                    style={{
                        backgroundColor : '#212121',
                        left: '0',
                        position: 'fixed',
                        top: '0',
                        width: '100%'
                    }}
                    onLeftIconButtonTouchTap={this.handleToggle}
                    showMenuIconButton={false}>
                    <span className="AppBar-Icons">
                        <Icon iconClassName="fa fa-envelope" />
                        <Icon iconClassName="fa fa-bell" />
                        <Icon iconClassName="fa fa-sign-out" />
                    </span>
                </AppBar>
                <Drawer
                    docked={true}
                    width={300}
                    open={true}
                    className="Drawer">
                    <Card>
                        <div className="Drawer-Avatar-Wrapper">
                            <CardMedia>
                                <img src="../img/sky.png" />
                            </CardMedia>
                            <div className="Drawer-Avatar">
                                <div>
                                    <Avatar
                                        size={60}
                                        src="../img/avatar.png"
                                        style={{ marginLeft : '15px' }}
                                    />
                                </div>
                                <div>
                                    <CardHeader
                                        subtitle="CP_JNA"
                                        subtitleColor="white"
                                        title="Bessie Coleman"
                                        titleColor="white"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Menu menuItemStyle={{color:'#7f8c8d', padding: '10px 10px 10px 25px', fontSize:'.8rem'}}>
                        <MenuItem primaryText="HOME" />
                        <MenuItem primaryText="OPEN BIDS" />
                        <MenuItem primaryText="HISTORY" />
                        <MenuItem primaryText="REPORTS" />
                        <MenuItem primaryText="SETTINGS" />
                        <MenuItem primaryText="SING OUT" />
                    </Menu>
                </Drawer>
                <CardMain />
            </main>
        );
    }
}
