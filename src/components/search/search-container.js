import { connect } from 'react-redux';
import SearchView from './search-view';
import { searchText } from '../horse/horse-reducer';
import { getRace } from '../race/race-reducer';
import { getHorses, addHorse } from '../horse/horse-reducer'

function filterHorses(horses, text){
    if(!text.text && !text.distance) return horses;
    return horses.filter(item => { return (parseInt(item.DIST) === text.distance && item.name.toLowerCase().includes(text.text.toLowerCase())) || (parseInt(item.DIST) === text.distance && item.code.toLowerCase().includes(text.text.toLowerCase())) });
}

function filterDist(horses, text){
    if(!horses || horses.length === 0) return [];

    var array=[];

    horses.reduce((arr, item) =>
    {
        if (!array.find(i => {
            return i === parseInt(item.DIST);
            })) array.push(parseInt(item.DIST));
    });

    return array.sort((a,b) => {return a - b;});
}

function onChange(e, dispatch)
{
    dispatch(searchText(e));
}

const mapStateToProps = state => {
    return {
        horses: filterHorses(state.horse.horses, state.horse.searchHorsesText),
        searchHorsesText: state.horse.searchHorsesText,
        distances: filterDist(state.horse.horses, state.horse.searchHorsesText)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (e,dist) => {
            onChange({text: e, distance: dist} , dispatch);
        },
        getHorsesAndRefresh: (raceid) => {
            dispatch(getRace(raceid));
            dispatch(getHorses(raceid));
        },
        addHorse: (name,code,raceid) => {
            dispatch(addHorse({name,code}, raceid));
        }
    };
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchView);

export default SearchContainer;
