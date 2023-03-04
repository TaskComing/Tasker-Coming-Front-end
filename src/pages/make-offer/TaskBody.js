import * as React from 'react';
import './TaskTitle.css';

export default function TaskBody({ task }) {
  return (
    <div className="price-box">
      <div className="task-price">${task.price}</div>
      <div className="task-description">
        <p>Details</p>
        <p>{task.detail}</p>
      </div>
    </div>
  );
}
