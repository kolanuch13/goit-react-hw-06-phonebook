import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactInitialState = [
    {
        "name": "Naruto",
        "number": "+123132",
        "id": "KdyrLjKaW3EtLDIGH2gjg"
    },
    {
        "name": "Sakura",
        "number": "+456465",
        "id": "bvQGrnEPiVxNrH8KRzwqv"
    },
    {
        "name": "Sasuke",
        "number": "+789789",
        "id": "n2HTpK_yNcO-oH-pji6ZE"
    },
    {
        "name": "Kakashi",
        "number": "+111111",
        "id": "b3ma96p-LBJw_XyA5DJy1"
    },
    {
        "name": "Yamato",
        "number": "+555555",
        "id": "Q_KkMWwx1biQGb7zspY5t"
    }
]

const contactSlice = createSlice({
    name: "contacts",
    initialState: contactInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    }
                }
            }
        },
        deleteContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
    }
})

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;