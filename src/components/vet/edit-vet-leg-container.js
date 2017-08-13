import { connect } from 'react-redux';
import HorseInfoView from './edit-vet-leg-view';
import { getRace } from '../race/race-reducer';
import { getHorse, setVetProp } from '../horse/horse-reducer'

const mapStateToProps = (state, ownProps) => {
    return {
        horse: state.horse.horse
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setVetProp: (prop, value, horseId) => {
            dispatch(setVetProp(prop, value, horseId));
        },
        getHorsesAndRefresh: (raceid, horseid) => {
            dispatch(getRace(raceid));
            dispatch(getHorse(horseid));
        }
    };
};

const HorseInfoContainer = connect(mapStateToProps, mapDispatchToProps)(HorseInfoView);

export default HorseInfoContainer;
