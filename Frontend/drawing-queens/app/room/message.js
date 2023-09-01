import React from 'react';

export default function Message(props) {
    return (
        <div style={{ background: "#eee", color: "#000", borderRadius: '5px', padding: '1px 10px'}}>
            <p><strong>{props.user}</strong> says:</p>
            <p>{props.message}</p>
        </div>
    );
} 