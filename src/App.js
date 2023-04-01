import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './pages/Layout';
import Home from './pages/homepage/Home';
import AboutTeam from './pages/about-team/AboutTeam';
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
          <Route path="*" element={<Error />} />
          <Route path="profile" element={<EditProfile />} />
          <Route path="task-details/:taskId" element={<TaskPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
