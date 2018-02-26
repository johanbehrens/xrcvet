import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '../button/button-group-view'
import Field from 'react-input-field'
var ReactDOM = require('react-dom');

class HorseInfoView extends Component {
    constructor(){
        super();
        this.edit = true;
    }

    componentDidMount(){
        this.props.getHorsesAndRefresh(this.props.match.params.raceid,this.props.match.params.horseid, this.props.match.params.leg);
        this.ClickOne = this.ClickOne.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    handleChange(value){
        this.props.setVetProp('COMMENT', value, this.props.match.params.horseid);
    }

    ClickOne(prop, value){
        this.props.setVetProp(prop, value, this.props.match.params.horseid);
    }

    Disqualify(){
        this.props.setVetProp('DISQ', true, this.props.match.params.horseid);
        this.props.saveVetCard(this.props.vetCard, this.props.match.params.horseid, this.props.match.params.leg)
    }



    render() {
        function validate(value){
            return value !== ''
        }
        return (<div className="container">
            <h1>{this.props.horse && this.props.horse.name}</h1>
            <h3>Vet Card</h3>
            <div className="col-md-6 col-xs-12">{'HYDR'}: {this.props.vetCard['HYDR']}</div>;

            {this.props.horse &&
            <div><div className="row">
                <div className="col-12">
                    <Button title="HYDR" items={['A','B','C','D']} editable={this.edit} vetCard={this.props.vetCard} horse={this.props.horse} leg='HYDR' prop={'HYDR'} onClick={this.ClickOne} />
                </div>
                <div className="col-12">
                    <Button title="LOCO" items={['A','B','C','D']} editable={this.edit} vetCard={this.props.vetCard} horse={this.props.horse} leg='LOCO' prop={'LOCO'} onClick={this.ClickOne}  />
                </div>
                <div className="col-12"><Button title="HABI" items={['A','B','C','D']} editable={this.edit} vetCard={this.props.vetCard} horse={this.props.horse} leg='HABI' prop={'HABI'} onClick={this.ClickOne}  />
                </div>
                <div className="col-12"><Button title="MEMB" items={['A','B','C','D']} editable={this.edit} vetCard={this.props.vetCard} horse={this.props.horse} leg='MEMB' prop={'MEMB'} onClick={this.ClickOne}  />
                </div>
                <div className="col-12"><Button title="CAP" items={['A','B','C','D']} editable={this.edit} vetCard={this.props.vetCard} horse={this.props.horse} leg='CAP' prop={'CAP'} onClick={this.ClickOne}  />
                </div>
                <div className="col-12"><Button title="GUT" items={['A','B','C','D']} editable={this.edit} vetCard={this.props.vetCard} horse={this.props.horse} leg='GUT' prop={'GUT'} onClick={this.ClickOne}  />
                </div>
                <div className="col-12"><Button title="GWB" items={['A','B','C','D']} editable={this.edit} vetCard={this.props.vetCard} horse={this.props.horse} leg='GWB' prop={'GWB'} onClick={this.ClickOne}  />
                </div>

            </div>
            <div className="row">
                <div className="col-2"> COMMENT: </div>
                <Field defaultValue={this.props.vetCard['COMMENT']} onChange={this.handleChange} validate={validate} />

                </div>


                {this.edit && <button className="btn btn-success" onClick={() => this.props.saveVetCard(this.props.vetCard, this.props.match.params.horseid, this.props.match.params.leg)}>Save</button>}
                <Link to={`/race/${this.props.match.params.raceid}/horse/${this.props.horse && this.props.horse._id}/leg/${this.props.horse && this.props.match.params.leg}/disqualify`} className="btn btn-info btn-block">Disqualify</Link>
            </div>}




            </div>);
    }
}

export default HorseInfoView;
