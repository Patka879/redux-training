import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
    name: 'playlist',
    initialState: {
        items: []
    },
    reducers: {
        setPlaylist: (state, action) => state.items = [...action.payload]
    }
})