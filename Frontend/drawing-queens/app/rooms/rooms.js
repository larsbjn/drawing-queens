"use client";
import React, { useState, useEffect } from "react";
export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("https://localhost:7157/api/Room")
      .then((response) => response.json())
      .then((data) => setRooms(data));
    console.log(rooms);

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  return <h1>fff</h1>;
}

// import Page from "../page";

/* function Rooms() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    async function getRooms() {
      const response = await fetch("https://localhost:7157/api/Room");
      const data = await response.json();
      setRooms(data);
      console.log(data);
      console.log(rooms);
    }
    getRooms();

    console.log(rooms);
  }, []);
}

export default Rooms; */

/* export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    async function getRooms() {
      const response = await fetch("https://localhost:7157/api/Room");
      const data = await response.json();
      setRooms(data);
      console.log(data);
      console.log(rooms);
    }
    getRooms();

    console.log(rooms);
  }, []);
} */
