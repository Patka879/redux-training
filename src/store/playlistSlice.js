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

export const {setPlaylist} = playlistSlice.actions
export default playlistSlice.reducer