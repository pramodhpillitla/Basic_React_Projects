import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Products from './pages/products';
import About from './pages/about';
import Contact from './pages/contact';
import Explore from './pages/Explore';
import RootLayout from './layout/RootLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Note: The `createRoutesFromElements` is not used in this example, but can
import { Routes, Route, createRoutesFromElements } from 'react-router-dom';
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';
import Jobs, { JobLoader } from './pages/Jobs';
import JobsLayout from './layout/JobsLayout'; 
import JobDetails from './components/JobDetails';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='explore' element={<Explore/>}/>
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactLayout />}>
        <Route path='info' element={<ContactInfo/>}/>
        <Route path='form' element={<ContactForm/>}/>
      </Route>

      <Route path="jobs" element={<JobsLayout />}>
        <Route index element={<Jobs />} loader={JobLoader} />
        <Route path=':id' element={<JobDetails />}  />
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  ))

  return (
    // <div>
    //   {/* <Navbar /> */}
    //   {/* <div className="container">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/products" element={<Products />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </div> */}
    // </div>


    <RouterProvider router={router} />
  );
}
export default App;