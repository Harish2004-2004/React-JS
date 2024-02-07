import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github, {githubInfo} from './components/Github/Github.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about/' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/' element={<User />}>
        <Route path=':userid' element={<user />} />
      </Route>
      <Route
        loader={githubInfo} 
        path='github' 
        element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
  </>
)
