import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import HomePage from './pages/HomePage/HomePage';
import SingleBlogPage from './pages/SingleBlogPage/SingleBlogPage';

function App() {
   const Layout = () => {
      return (
         <>
            <Navbar />
            <Sidebar />
            <Outlet />
            <Footer />
         </>
      );
   };

   const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/blog/:id',
          element: <SingleBlogPage/>
        }
      ]
    }
   ])
   return <RouterProvider router={router} />
}

export default App;
