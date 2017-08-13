import { connect } from 'react-redux';
import SelectRaceView from './select-race-view';

const mapStateToProps = state => {
    return {
        races: state.race.races
    };
};

const SelectRaceContainer = connect(mapStateToProps, null)(SelectRaceView);

export default SelectRaceContainer;
