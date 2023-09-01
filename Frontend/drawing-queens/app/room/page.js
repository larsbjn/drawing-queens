"use client";
import styles from '../../styles/Player.module.scss'
import Chat from './chat';

export default function Page(props) {
    // check if props is null
    const roomName = props.roomName;
    const playerName = props.playerName;
    return <>
        <h1>Room: {roomName}</h1>
        <h1>Player: {playerName}</h1>
    </>
}