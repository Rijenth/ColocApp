import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    sum: "",
    why: "",
    category: "",
    date: ""
};

/*
export const addResumesReducer = createSlice({
    name: "addResumes",
    initialState,
    reducers: {
        getDashboardRequest: (state) => {
            state = initialState;
        },
        getDashboardSuccess: (state, action) => {
            state = action.payload;
        },
        getDashboardFail: (state, action) => {
            state = action.payload;
        },
        createDashboardRequest: (state, action) => {
            state.sum = action.payload.sum;
            state.why = action.payload.why;
            state.category = action.payload.category;
            state.date = action.payload.date;
        },
        createDashboardSuccess: (state) => {
            state = initialState
        },
        createDashboardFail: (state, action) => {
            state = action.payload;
        },
        updateDashboardRequest: (state, action) => {
            state = action.payload;
        },
        updateDashboardSuccess: (state, action) => {
            state = action.payload;
        },
        updateDashboardFail: (state, action) => {
            state = action.payload;
        },
        deleteDashboardRequest: (state, action) => {
            state = action.payload;
        },
        deleteDashboardSuccess: (state, action) => {
            state = action.payload;
        },
        deleteDashboardFail: (state, action) => {
            state = action.payload;
        }
},
});*/

export function addResumesReducer(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_RESUME_REQUEST':
            return {
                ...state,
                resume: action.payload
            }
        case 'CREATE_RESUME_SUCCESS':
            return {
                ...state,
                title: '',
                sum: ""
            }
        case 'CREATE_RESUME_FAIL':
            return {
                ...state,
                title: '',
                sum: ""
            }
        default:
            return state
    }
}