import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HeaderContent extends Component {
    render() {
        return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a><Link to={`/`} className="btn" >XRC Vet</Link></a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {this.props.race && <li className="nav-item">
                        <a><Link to={`/race/${this.props.race._id}/search`} className="btn" >{this.props.race.name}</Link></a>
                    </li>}
                    {this.props.horse && <li className="nav-item">
                        <a><Link to={`/race/${this.props.race._id}/horse/${this.props.horse._id}`} className="btn" >{this.props.horse.name}</Link></a>
                    </li>}
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    {this.props.isAuthenticated && <div className="my-2 my-lg-0">
                        <button className="nav-link" onClick={() => this.props.onLogout()}>Logout</button>
                    </div>}
                </form>
            </div>
        </nav>);
    }
}

export default HeaderContent;
