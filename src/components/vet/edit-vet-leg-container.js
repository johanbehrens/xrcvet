import { connect } from 'react-redux';
import HorseInfoView from './edit-vet-leg-view';
import { getRace } from '../race/race-reducer';
import { getHorse } from '../horse/horse-reducer'
import { loadVetCard, setVetCardAttr, saveVetCard } from './vet-reducer';

const mapStateToProps = (state, ownProps) => {
    return {
        horse: state.horse.horse,
        vetCard: state.vetCard.vetCard
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveVetCard:  (vetCard, horseid, leg) => {
            dispatch(saveVetCard(vetCard, horseid, leg));
        },
        setVetProp: (prop, value, horseId) => {
            dispatch(setVetCardAttr(prop, value));
        },
        getHorsesAndRefresh: (raceid, horseid, leg) => {
            dispatch(getRace(raceid));
            dispatch(getHorse(horseid));
            dispatch(loadVetCard(horseid, leg));
        }
    };
};

const HorseInfoContainer = connect(mapStateToProps, mapDispatchToProps)(HorseInfoView);

export default HorseInfoContainer;
