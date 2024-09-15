import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './pages/Product.jsx';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import store from './redux/store.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
  {
    path: '/product',
    element: <Product />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
