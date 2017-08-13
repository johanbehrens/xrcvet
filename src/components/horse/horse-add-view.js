import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HorseInfoView extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            code: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addhorse = this.addhorse.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    addhorse(){
        this.props.addHorse(this.state.name, this.state.code, this.props.match.params.raceid);
        this.setState({
            name: '',
            code: ''
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        Horse Details
                    </div>
                        <div className="col-12">
                        Name: <input name="name" onChange={this.handleInputChange} value={this.state.name} />
                    </div>
                    <div className="col-12">
                        Code: <input name="code" onChange={this.handleInputChange} value={this.state.code} />
                    </div>
                    <div className="col-12">
                        <button onClick={() => this.addhorse()}>Add Horse</button>
                        <Link to={`/race/${this.props.match.params.raceid}/search`} className="btn btn-info btn-block">Done</Link>
                    </div>
                </div>
        </div>);
    }
}

export default HorseInfoView;
