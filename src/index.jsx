import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Layout } from '@components/Layout';
import { Main } from '@components/Main';
import { Example } from '@components/Examples/Example';

import { store } from '@store/mainStore';

import 'normalize.css';
import "react-datepicker/dist/react-datepicker.css";
import '@style/main.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout>
            <Main />
        </Layout>
    },
    {
        element: <Example />,
        path: '/example/:id',
    },
    {
        path: '*',
        element: <Navigate to="/" replace />
    }
], {
    basename: '/'
})

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>,
    );
}