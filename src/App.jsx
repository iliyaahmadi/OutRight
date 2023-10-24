import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
//components
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
//pages
import Home from './pages/home';
import Auth from './pages/auth';
//layout
import RootLayout from './layout/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: '/discover', element: <Cat /> },
    ],
  },
  {
    path: '/auth',
    element: <Auth />,
    children: [
      { path: '/auth/login', element: <LoginForm /> },
      { path: '/auth/signup', element: <SignupForm /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
