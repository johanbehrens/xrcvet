import { connect } from 'react-redux';
import HorseInfoView from './vet-leg-view';
import { getRace } from '../race/race-reducer';
import { getHorse } from '../horse/horse-reducer'

const mapStateToProps = (state, ownProps) => {
    return {
        horse: state.horse.horse
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getHorsesAndRefresh: (raceid, horseid) => {
            dispatch(getRace(raceid));
            dispatch(getHorse(horseid));
        }
    };
};

const HorseInfoContainer = connect(mapStateToProps, mapDispatchToProps)(HorseInfoView);

export default HorseInfoContainer;
