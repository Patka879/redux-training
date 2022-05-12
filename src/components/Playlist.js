import  { useSelector, useDispatch } from 'react-redux'
import { setPlaylist } from '../store/playlistSlice'
import { googleBooksClient } from '../client'
import { useState, useEffect} from 'react'



export default function Playlist() {

    const playlist = useSelector(state => state.playlist.items)
    const dispatch = useDispatch()

    const [searchString, setSearchString] = useState("")

    useEffect(() => {
        googleBooksClient({
            method: "GET",
            url: `/volumes?maxResults=10`
        })
    },[])

    useEffect(() => {
        googleBooksClient({
            method: "GET",
            url: `/volumes?q=${searchString}&maxResults=10`
        })
    },[searchString])

    return (
        <div>
            <input type="text" onChange={event => {setSearchString(event.currentTarget.value)}} />
            {playlist.map(playlistItem => <span>{playlistItem.name}</span>)}
        </div>
    )
}