"use client";
import React, { useState, useEffect } from "react";
export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    async function getRooms() {
      const response = await fetch("https://localhost:7157/api/Room");
      const data = await response.json();
      setRooms(data);
      console.log(data);
    }
    getRooms();

    console.log(rooms);

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
}
