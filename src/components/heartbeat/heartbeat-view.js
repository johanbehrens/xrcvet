import React, { Component } from 'react';

    class Heartbeat extends Component {
        constructor(props, context) {
            super(props, context);

            this.onChange = this.onChange.bind(this);
            this.saveMonitor = this.saveMonitor.bind(this);
        }

        onChange(e){
            var id = e.target.id;
            this.props.setMonitor(id, e.target.value);
        };

        saveMonitor(id, ip){
            this.props.saveMonitor(this.props.selectedMonitor);
        }

        componentDidMount(){
            this.props.refreshMonitors();
        }

        render() {
            return (
                <div className="content">
                    {this.props.monitors && this.props.monitors.map(monitor => <div key={monitor.identifier}>{monitor.identifier} - <input id={monitor.identifier} onChange={this.onChange} value={monitor.ip} /> - {monitor.port} {this.props.selectedMonitor && this.props.selectedMonitor.identifier == monitor.identifier && <button data={monitor.ip} onClick={this.saveMonitor}>Update</button>}</div>)}
            </div>);
        }
}

export default Heartbeat;
