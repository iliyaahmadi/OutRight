import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import RootLayout from './layout/root';
import Home from './pages/home';
//pages
//layout

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: '/discover', element: <Cat /> },
    ],
  },
  // {
  //   path: '/signup',
  //   element: <Signup />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
