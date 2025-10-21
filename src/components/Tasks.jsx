import React from "react";

export function Tasks ({ name, completed }) {
    return (
        <div>
            <p>{name} - {completed ? '✅ Completed' : '❌ Not Completed'}</p>
        </div>
    );
}

export default Tasks;
