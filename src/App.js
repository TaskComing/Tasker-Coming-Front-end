import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/homepage/Home';
import AboutTeam from './pages/AboutTeam';
import BrowseTasks from './pages/BrowseTasks';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import PostTask from './pages/PostTask';
import TaskPage from './pages/make-offer/TaskPage';
import Error from './pages/Error';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post-task" element={<PostTask />} />
          <Route path="browse-task" element={<BrowseTasks />} />
          <Route path="about-team" element={<AboutTeam />} />
          <Route path="login" element={<Login />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="task-details" element={<TaskPage />} />
          <Route path="*" element={<Error />} />
          <Route path="profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
