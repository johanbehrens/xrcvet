import { connect } from 'react-redux';
import RaceView from './race-view';
import { setRaceAndRefresh,getRacesToImport } from './race-reducer';

const mapStateToProps = state => {
    return {
        race: state.race.race,
        availableRaces: state.race.availableRaces
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setRace: (name, file) => {
            dispatch(setRaceAndRefresh(name, file));
        },
        getRacesToImport: () =>
        {
            dispatch(getRacesToImport());
        }
    };
};

const RaceContainer = connect(mapStateToProps, mapDispatchToProps)(RaceView);

export default RaceContainer;
