import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '../button/button-group-view'
import Field from 'react-input-field'
var ReactDOM = require('react-dom');

class HorseInfoView extends Component {
    constructor(){
        super();
        this.comment = '';
        this.edit = true;
    }

    componentDidMount(){
        this.props.getHorsesAndRefresh(this.props.match.params.raceid,this.props.match.params.horseid);
        this.ClickOne = this.ClickOne.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    handleChange(value){
        this.comment = value;
    }

    ClickOne(prop, value){
        this.props.setVetProp(prop, value, this.props.match.params.horseid);
    }



    render() {
        function validate(value){
            return value !== ''
        }
        return (<div className="container">
            <h1>{this.props.horse && this.props.horse.name}</h1>
            <h3>Vet Card</h3>
            {this.props.horse &&
            <div><div className="row">
                <div className="col-12 col-md-6">
                    <Button title="HYDR" items={['A','B','C','D']} editable={this.edit} value={this.props.horse['HYDR'+this.props.match.params.leg]} prop={'HYDR'+this.props.match.params.leg} onClick={this.ClickOne} />
                </div>
                <div className="col-12 col-md-6">
                <Button title="LOCO" items={['A','B','C','D']} editable={this.edit} value={this.props.horse['LOCO'+this.props.match.params.leg]} prop={'LOCO'+this.props.match.params.leg} onClick={this.ClickOne}  />
                </div>
                <div className="col-12 col-md-6"><Button title="HABI" items={['A','B','C','D']} editable={this.edit} value={this.props.horse['HABI'+this.props.match.params.leg]} prop={'HABI'+this.props.match.params.leg} onClick={this.ClickOne}  />
                </div>
                <div className="col-12 col-md-6"><Button title="MEMB" items={['A','B','C','D']} editable={this.edit} value={this.props.horse['MEMB'+this.props.match.params.leg]} prop={'MEMB'+this.props.match.params.leg} onClick={this.ClickOne}  />
                </div>
                <div className="col-12 col-md-6"><Button title="CAP" items={['A','B','C','D']} editable={this.edit} value={this.props.horse['CAP'+this.props.match.params.leg]} prop={'CAP'+this.props.match.params.leg} onClick={this.ClickOne}  />
                </div>
                <div className="col-12 col-md-6"><Button title="GUT" items={['A','B','C','D']} editable={this.edit} value={this.props.horse['GUT'+this.props.match.params.leg]} prop={'GUT'+this.props.match.params.leg} onClick={this.ClickOne}  />
                </div>
                <div className="col-12 col-md-6"><Button title="GWB" items={['A','B','C','D']} editable={this.edit} value={this.props.horse['GWB'+this.props.match.params.leg]} prop={'GWB'+this.props.match.params.leg} onClick={this.ClickOne}  />
                </div>

            </div>
            <div className="row">
                <div className="col-2"> COMMENT: </div>
                <Field defaultValue={this.props.horse['COMMENT'+this.props.match.params.leg]} onChange={this.handleChange} validate={validate} />

                </div>


                {this.edit && <button className="btn btn-success" onClick={() => this.ClickOne('COMMENT'+this.props.match.params.leg, this.comment)}>Save</button>}
            </div>}




            </div>);
    }
}

export default HorseInfoView;
