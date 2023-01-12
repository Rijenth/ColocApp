import {IDashboardState} from "../interfaces/data.interface";
import {Dispatch} from "react";
import {AcreateDashboardRequest, AcreateDashboardSuccess, AcreateDashboardFail} from "../redux/actions/Dashboard.actions";

export function createDashboard(dashboard: IDashboardState) {

    return async (dispatch: Dispatch<any>) => {
        dispatch(AcreateDashboardRequest(dashboard));
        try {
            /*const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/Dashboard/create`, Dashboard);*/
            const response = {data: dashboard};
            dispatch(AcreateDashboardSuccess(response.data));
        } catch (error: any) {
            dispatch(AcreateDashboardFail(error.message));
        }
    };
}