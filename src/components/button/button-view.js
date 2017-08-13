import React, { Component } from 'react';

class ButtonView extends Component {
    render() {
        function isActive(evaluator, editable){
            return  evaluator ? editable ? 'card-block active' : 'card-block inactive' : 'card-block';
        }

        return (<div className="card" onClick={() => {if(this.props.editable) this.props.onClick(this.props.prop, this.props.label)} }>
            <div className={isActive(this.props.evaluator, this.props.editable)}>
                {this.props.label}
            </div>
        </div>);
    }
}

export default ButtonView;
