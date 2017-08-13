import { connect } from 'react-redux';
import HorseAddView from './horse-add-view';
import { addHorse } from './horse-reducer'

const mapDispatchToProps = dispatch => {
    return {
        addHorse: (name,code,raceid) => {
            dispatch(addHorse({name,code}, raceid));
        }
    };
};

const HorseAddContainer = connect(null, mapDispatchToProps)(HorseAddView);

export default HorseAddContainer;
