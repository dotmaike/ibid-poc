import React, {Component} from 'react';
import './styles.scss';

class AppBarTitle extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let icon;
        if(this.props.hasIcon) {
            icon = (<i style={{color: this.props.iconColor}} className="fa fa-ellipsis-v" />);
        }
        return(
            <div className="app-bar-title expanded row" style={{backgroundColor: this.props.backgroundColor}}>
                <h4 style={{color: this.props.titleColor}}>{this.props.title}</h4>
                <p style={{color: this.props.subtitleColor}}>{this.props.subtitle}</p>
                {icon}
            </div>
        );
    }
}

export default AppBarTitle;
