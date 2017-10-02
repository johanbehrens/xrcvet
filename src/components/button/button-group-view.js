import React, { Component } from 'react';
import Button from './button-view'

class ButtonView extends Component {
    constructor() {
        super();
        this.ClickOne = this.ClickOne.bind(this);
        this.shouldRender = this.shouldRender.bind(this);
    }

    ClickOne(prop, value){
        this.props.onClick(prop, value)
    }

    render() {

        return (<div className="row">
            <div className="col-2"> {this.props.title}</div>
            {this.props.items.map(item => {
                return <Button label={item} key={item} editable={this.props.editable} evaluator={item===this.props.horse[this.props.prop]} prop={this.props.prop} onClick={this.ClickOne} />;
            })}
            {this.shouldRender(1, this.props.horse, `${this.props.leg}0`)}
            {this.shouldRender(2, this.props.horse, `${this.props.leg}1`)}
            {this.shouldRender(3, this.props.horse, `${this.props.leg}2`)}
            {this.shouldRender(4, this.props.horse, `${this.props.leg}3`)}
            {this.shouldRender(5, this.props.horse, `${this.props.leg}4`)}

        </div>);
    }

    shouldRender(i, horse, leg){
        if(horse && horse[leg] && horse[leg] !== '')
        {
            return <div>({i} - {horse[leg]})</div>;
        }
        return;
    }
}

export default ButtonView;
