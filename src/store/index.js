import { configureStore } from "@reduxjs/toolkit";
import playlist from "./playlistSlice"

export default configureStore({
    reducer: {
        playlist
    }
})

