import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Field from 'react-input-field';

class VetLegDisqualifyView extends Component {

    componentDidMount(){
        this.props.getHorsesAndRefresh(this.props.match.params.raceid,this.props.match.params.horseid, this.props.match.params.leg);
        this.handleChange = this.handleChange.bind(this);
        this.disqualify = this.disqualify.bind(this);
    }

    handleChange(value){
        this.props.setVetProp('REASON', value, this.props.match.params.horseid);
        this.props.setVetProp('DISQ', true, this.props.match.params.horseid);
    }

    disqualify(){
        this.props.saveVetCard(this.props.vetCard, this.props.match.params.horseid, this.props.match.params.leg)
    }

    render() {
        function validate(value){
            return value !== ''
        }
        return (<div className="row">
            <div className="col-2"> REASON: </div>
            <Field defaultValue={this.props.vetCard['REASON']} onChange={this.handleChange} validate={validate} />

            <Link to={`/race/${this.props.match.params.raceid}/horse/${this.props.horse && this.props.horse._id}/leg/${this.props.horse && this.props.match.params.leg}/Edit`} className="btn btn-info btn-block">Back</Link>
            <button className="btn btn-danger" onClick={() => this.disqualify()}>Disqualify</button>
        </div>);
    }
}

export default VetLegDisqualifyView;
