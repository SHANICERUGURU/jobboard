import React from 'react';
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './components/landingpage.jsx';
import SetJobForm from './components/setjobform.jsx';
import JobsContainer from './components/schema/jobscontainer.jsx';
import JobsProfile from './components/schema/jobsprofile.jsx';
import ApplicForm from './components/schema/applicform.jsx';
import MyJobs from './components/schema/myjobs.jsx';
import SignUp from './components/schema/signup.jsx';
import Login from './components/schema/login.jsx';
import { createContext, useState } from 'react';

export const UserContext = createContext()
function App() {
  const [user, setUser] = useState({
    username: null,
    isAuthenticated: false
  })

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/home',
      element: <JobsContainer />
    },
    {
      path: '/jobsprofile',
      element: <JobsProfile />
    },
    {
      path: '/setjobform',
      element: <SetJobForm />
    },
    {
      path: '/applicform',
      element: <ApplicForm />
    },
    {
      path: '/myjobs',
      element: <MyJobs />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/login',
      element: <Login />
    },
  ])

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  )
}

export default App
