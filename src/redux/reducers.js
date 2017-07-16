import { combineReducers } from 'redux';
import sideNavigationReducer from '../components/navigation/side-navigation-bar-reducer';
import viewReducer from '../components/main-header/top-filter/top-filter-reducer';
import subFilterReducer from '../components/sub-filter/sub-filter-reducer';
import activityReducer from '../pages/activity/activity-status-reducer';
import refreshReducer from '../refresh-data/refresh-data-reducer';
import branchSelectorDropdownReducer from '../components/main-header/top-filter/branch-selector/branch-selector-dropdown/branch-selector-dropdown-reducer';

export default combineReducers({
    view: viewReducer,
    sideNavigation: sideNavigationReducer,
    subFilter: subFilterReducer,
    activityStatus: activityReducer,
    refreshReducer,
    branchSelectorDropdownReducer
});
