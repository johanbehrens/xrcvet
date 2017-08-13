import React, { Component } from 'react';
import Button from './button-view'

class ButtonView extends Component {
    constructor() {
        super();
        this.ClickOne = this.ClickOne.bind(this);
    }

    ClickOne(prop, value){
        this.props.onClick(prop, value)
    }

    render() {

        return (<div className="row">
            <div className="col-2"> {this.props.title}</div>
            {this.props.items.map(item => {
                return <Button label={item} key={item} editable={this.props.editable} evaluator={item===this.props.value} prop={this.props.prop} onClick={this.ClickOne} />;
            })}

        </div>);
    }
}

export default ButtonView;
