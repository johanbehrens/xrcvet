import { connect } from 'react-redux';
import HomeView from './home-page-view';

const mapStateToProps = state => {
    return {
        races: state.race.races
    };
};

const HomeContainer = connect(mapStateToProps, null)(HomeView);

export default HomeContainer;
