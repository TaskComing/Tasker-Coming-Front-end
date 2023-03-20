/* eslint-disable jsx-a11y/img-redundant-alt */
import {taskData} from './task-data.js';
import {useState} from 'react';
import NavBar from './NavBar.js';
import TaskCard from './TaskCard.js';
import './Search.css';

export default function Search(){
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  return (
    <>
      <NavBar/>
      <div className="search-bar">
          <div className="multiple-choices">Multiple Choices</div>
            <input className="search-bar" type="search" name="search" value={searchTerm}
            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search tasks"
            onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className="search" onClick={() => {setQuery(searchTerm)}}>Search</button>
      </div>
      <div className="filter-bar"> </div>
      <TaskItems query={query}/>
      <div className="next-pages"> </div>
    </>
 )
}

function TaskItems({query}){

  let taskList = [];
  if (query === "") {
    // If query is empty, return all tasks
    taskList = Array.from(taskData); // Copy the taskData array to the "taskList" variable
  } 
  else {
    // If query is not empty, return tasks whose title match the query
    taskList = taskData.filter((task)=>task.title.toLowerCase().includes(query.toLowerCase()));
  }

  if (taskList.length < 9){
    for (let i = taskList.length; i < 9; i++){
      taskList.push({});
    }
  }

  return (
    <div className="search-results">
      <TaskCard task={taskList[0]}/>
      <TaskCard task={taskList[1]}/>
      <TaskCard task={taskList[2]}/>
      <TaskCard task={taskList[3]}/>
      <TaskCard task={taskList[4]}/>
      <TaskCard task={taskList[5]}/>
      <TaskCard task={taskList[6]}/>
      <TaskCard task={taskList[7]}/>
      <TaskCard task={taskList[8]}/>
    </div>
  );
}