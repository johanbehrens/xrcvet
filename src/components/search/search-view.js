import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SearchView extends Component {

    componentDidMount(){
        this.props.getHorsesAndRefresh(this.props.match.params.raceid);
    }

    componentWillMount(){
        if(this.props.distances.length > 0 && this.props.searchHorsesText.distance === '')
        {
            this.props.onChange(this.props.searchHorsesText['text'], this.props.distances[0]);
        }
    }

    render() {
        return (<div className="container">
            <div className="row justify-content-around">
                <div className="col-12 col-md-6">
                    <button className="btn btn-success btn-block">Set Race Active</button>
                </div>
                <div className="col-12 col-md-6">
                    <Link to={`/race/${this.props.match.params.raceid}/addhorse`} className="btn btn-success btn-block">+ Horse</Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Search: <input onChange={(e) => this.props.onChange(e.target.value, this.props.searchHorsesText['distance'])} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {this.props.distances.map((i) => {
                        return <button onClick={() => this.props.onChange(this.props.searchHorsesText['text'], i)} className={ this.props.searchHorsesText.distance === i ? "btn btn-success" : "btn btn-default" }>{i}</button>
                    })}
                </div>
            </div>

            <div className="row justify-content-around">
                <div className="col-12 col-md-6">



            {this.props.horses.map((item) =>
            {
                return <Link to={`/race/${this.props.match.params.raceid}/horse/${item._id}`} key={item._id} className="btn btn-info btn-block">{item.name} - {item.code}</Link>
            })}

                </div>
            </div>
    </div>);
    }
}

export default SearchView;
