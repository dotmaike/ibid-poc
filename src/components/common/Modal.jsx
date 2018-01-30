import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

export default class Modal extends React.Component {

    constructor(props) {
        super(props);
        this._handleRequestClose = this._handleRequestClose.bind(this);
        this.state = this.props.status;
    }

    _handleRequestClose() {
        this.setState({open: false});
    }

    render() {
        const styles = {
            paper: {
                height: 300,
                width: '99%',
                marginTop: 20,
                textAlign: 'center',
                display: 'inline-block',
                appBar: {
                    backgroundColor: '#F7F7F7',
                    boxShadow: 'none',
                    height: 100,
                    textAlign: 'left',
                    width: '100%'
                },
                addIcon: {
                    marginTop: -28,
                    position: 'absolute',
                    right: 65,
                    zIndex: 1111
                }
            }
        };

        const actions = [
            <RaisedButton backgroundColor="#ADADAD" style={{marginRight: 20}} label="Cancel" primary={true} onTouchTap={this._handleRequestClose} />,
            <RaisedButton label="Next" primary={true} onTouchTap = {this._handleRequestClose} />
        ];

        return (
            <Dialog
                title={this.props.modalTitle}
                titleStyle={{backgroundColor: '#3F51B5', color: '#FFFFFF'}}
                open={this.state.open}
                actions={actions}
                onRequestClose={this._handleRequestClose}>
                <p>Only actions can close this dialog.</p>
            </Dialog>
        );
    }

}
