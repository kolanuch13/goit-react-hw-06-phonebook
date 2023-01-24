import { createSlice } from "@reduxjs/toolkit";
import { namedFilter } from "./constants";

const filterInitialState = {
    status: namedFilter.name
}

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setFilteredContacts(state, action) {
            state.contacts.filter(contact =>
                contact.name.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        // setFilteredContacts(state, action) {
        //     state.status = action.payload;
        // },
    },
});

export const { setFilteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;