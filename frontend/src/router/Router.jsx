import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Catalogue from '@/pages/Catalogue/Catalogue';
import AboutUs from '@/pages/AboutUs/AboutUs';
import Contact from '@/pages/Contact/Contact';
import ContentDetails from '@/pages/ContentDetails/ContentDetails';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/catalogue',
    element: <Catalogue />, 
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/catalogue/:id',
    element: <ContentDetails />
  }
]);