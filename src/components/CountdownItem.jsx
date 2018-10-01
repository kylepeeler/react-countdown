import React from 'react';

export default function CountdownItem(props) {
    return (
        <div className="countdown-item">
            <span className="countdown-value">{props.value}</span>
            <span className="countdown-unit">{props.unit}</span>
        </div>
    )
}