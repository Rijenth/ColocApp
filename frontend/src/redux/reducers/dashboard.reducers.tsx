import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    dashboard: {
        resumes: [
            { sum: "100", why: "why", category: "category", date: "date" },
        ],
    },
};

export const addResumesReducer = createSlice({
    name: "addResumes",
    initialState,
    reducers: {
        addResumes: (state, action) => {
            state.dashboard.resumes.push(action.payload);
        }
},
});

export const { addResumes } = addResumesReducer.actions;

export default addResumesReducer.reducer;