import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

    class LoginContent extends Component {
        constructor(props, context) {
            super(props, context);
            this.name = '';
            this.password = '';
            this.location = '';

            this.onChangeName = this.onChangeName.bind(this);
            this.onChangePassword = this.onChangePassword.bind(this);
        }

        onChangeName(e){
            this.name = e.target.value;
        };

        onChangePassword(e){
            this.password = e.target.value;
        };

        render() {
            return (
                <div className="content">
                { this.props.showMessage && <Alert bsStyle="danger">
                    <strong>UnAuthorized!</strong> {this.props.message}
                </Alert>}

                    <div className="row justify-content-md-center">
                        <div className="col-md-4 form-group">
                            <label>{this.props.options.email.label}</label>
                        <input type="text" name="name" onChange={this.onChangeName} className="form-control"
                                   placeholder={this.props.options.email.placeholder}/>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-4 form-group">
                            <label>{this.props.options.password.label}</label>
                            <input type="password" name="password" onChange={this.onChangePassword} className="form-control"
                                   placeholder={this.props.options.password.placeholder}/>
                        </div>
                    </div>
                <button type="btn" onClick={e => this.props.onSubmit(e, this.name, this.password)}
                            className="btn btn-default">{this.props.options.submitButton.text}</button>

            </div>);
        }
}

export default LoginContent;
