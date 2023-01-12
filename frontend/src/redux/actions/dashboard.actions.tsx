// Dashboard actions
import { AnyAction } from "redux";
import {
    GET_DASHBOARD_REQUEST,
    GET_DASHBOARD_SUCCESS,
    GET_DASHBOARD_FAIL,
    CREATE_DASHBOARD_REQUEST,
    CREATE_DASHBOARD_SUCCESS,
    CREATE_DASHBOARD_FAIL,
    UPDATE_DASHBOARD_REQUEST,
    UPDATE_DASHBOARD_SUCCESS,
    UPDATE_DASHBOARD_FAIL,
    DELETE_DASHBOARD_REQUEST,
    DELETE_DASHBOARD_SUCCESS,
    DELETE_DASHBOARD_FAIL
} from "../constants/dashboard.constants";
import { IDashboardState } from "../../interfaces/data.interface";

// Resume Actions

export const AgetDashboardRequest = (): AnyAction => {
    return {
        type: GET_DASHBOARD_REQUEST,
    };
}

export const AgetDashboardSuccess = (dashboard: IDashboardState): AnyAction => {
    return {
        type: GET_DASHBOARD_SUCCESS,
        payload: dashboard,
    };
}

export const AgetDashboardFail = (error: string): AnyAction => {
    return {
        type: GET_DASHBOARD_FAIL,
        payload: error,
    };
}

export const AcreateDashboardRequest = (dashboard: IDashboardState): AnyAction => {
    return {
        type: CREATE_DASHBOARD_REQUEST,
        payload: dashboard,
    };
}

export const AcreateDashboardSuccess = (dashboard: IDashboardState): AnyAction => {
    return {
        type: CREATE_DASHBOARD_SUCCESS,
        payload: dashboard,
    };
}

export const AcreateDashboardFail = (error: string): AnyAction => {
    return {
        type: CREATE_DASHBOARD_FAIL,
        payload: error,
    };
}

export const AupdateDashboardRequest = (dashboard: IDashboardState): AnyAction => {
    return {
        type: UPDATE_DASHBOARD_REQUEST,
        payload: dashboard,
    };
}

export const AupdateDashboardSuccess = (dashboard: IDashboardState): AnyAction => {
    return {
        type: UPDATE_DASHBOARD_SUCCESS,
        payload: dashboard,
    };
}

export const AupdateDashboardFail = (error: string): AnyAction => {
    return {
        type: UPDATE_DASHBOARD_FAIL,
        payload: error,
    };
}

export const AdeleteDashboardRequest = (dashboard: IDashboardState): AnyAction => {
    return {
        type: DELETE_DASHBOARD_REQUEST,
        payload: dashboard,
    };
}

export const AdeleteDashboardSuccess = (dashboard: IDashboardState): AnyAction => {
    return {
        type: DELETE_DASHBOARD_SUCCESS,
        payload: dashboard,
    };
}

export const AdeleteDashboardFail = (error: string): AnyAction => {
    return {
        type: DELETE_DASHBOARD_FAIL,
        payload: error,
    };
}