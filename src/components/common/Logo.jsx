import React from 'react';

export default class Logo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let versionText;
        if(this.props.version == true) {
            versionText = (<div className="Logo-Version-Text">Version 3.0.1</div>)
        }
        return (
            <div className="Logo-Wrapper">
                <div className="Logo-Title">
                    ALTITUDE
                </div>
                <div className="Logo-Subtitle">
                    CREW INTERFACE
                </div>
                {versionText}
            </div>
        );
    }

}
