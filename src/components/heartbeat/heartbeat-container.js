import { connect } from 'react-redux';
import HeartbeatView from './heartbeat-view';
import { refreshMonitors, setMonitorAndRefresh, setIp } from './heartbeat-reducer';

const mapStateToProps = state => {
    return {
        monitors: state.heartBeat.monitors,
        selectedMonitor: state.heartBeat.selectedMonitor
    };
};

const mapDispatchToProps = dispatch => {
    return {
        refreshMonitors: () => {
            dispatch(refreshMonitors);
        },
        setMonitor: (id, ip) => {
            dispatch(setMonitorAndRefresh(id, ip));
        },
        saveMonitor: (selectedMonitor) => {
            dispatch(setIp(selectedMonitor.identifier, selectedMonitor.ip));
        }
    };
};

const Heartbeat = connect(mapStateToProps, mapDispatchToProps)(HeartbeatView);

export default Heartbeat;
