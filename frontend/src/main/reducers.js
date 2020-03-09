import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import DashBoardReducer from "../dashBoard/dashBoardReducer";
import TabReducers from "../common/tab/tabReducer";
import BillingCycleReducers from "../billingCycle/billingCycleReducer";

const rootReducer = combineReducers({
    dashboard: DashBoardReducer,
    tab: TabReducers,
    billingCycle: BillingCycleReducers,
    form: formReducer,
    toastr: toastrReducer
});

export default rootReducer;
