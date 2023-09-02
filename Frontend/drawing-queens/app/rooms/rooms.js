"use client";
import { useEffect, useState } from 'react'

const App = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        (async () => {
            const data = await fetch('https://localhost:7157/api/Room')
                .then(res => res.json())
            setRooms(data);
        })()
    }, [])
    
    return (<ul>
      {rooms.map(room => (
        <li key={room.name}>{room.name}</li>
      ))}
    </ul>)
}

export default App