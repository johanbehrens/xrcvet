import React from 'react';
import { Alert } from 'react-bootstrap';

function LoginContent({ options, showMessage, message, onChange, onSubmit }) {
    return <div>
        { showMessage && <Alert bsStyle="danger">
            <strong>UnAuthorized!</strong> {message}
        </Alert>}
        <form>
            <div className="form-group">
                <label>{options.email.label}</label>
                <input type="email" name="name" onChange={onChange} className="form-control" placeholder={options.email.placeholder} />
            </div>
            <div className="form-group">
                <label>{options.password.label}</label>
                <input type="password" name="password" onChange={onChange}  className="form-control" placeholder={options.password.placeholder} />
            </div>
            <div className="checkbox">
                <label>
                    <input type="checkbox" onChange={onChange}  /> {options.checkbox.text}
                </label>
            </div>
            <button type="submit" onClick={onSubmit} className="btn btn-default">{options.submitButton.text}</button>
        </form>
    </div>;
}

LoginContent.propTypes=
{
    options: React.PropTypes.object,
    message: React.PropTypes.string,
    showMessage: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    onSubmit: React.PropTypes.func
};

export default LoginContent;
