import * as React from 'react';
import './TaskTitle.css';
import PropTypes from 'prop-types';

function TaskBody({ task }) {
  return (
    <div className="price-box">
      <div className="task-price">${task.final_price}</div>
      <div className="task-description">
        <p>Details</p>
        <p>{task.detail}</p>
      </div>
    </div>
  );
}

TaskBody.propTypes = {
  task: PropTypes.shape({
    detail: PropTypes.string.isRequired,
    final_price: PropTypes.number.isRequired,
  }).isRequired,
};

export default TaskBody;
