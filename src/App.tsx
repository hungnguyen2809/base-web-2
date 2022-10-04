import { store } from 'app/store';
import ErrorBoundary from 'components/ErrorBoundary';
import LoadingSkeleton from 'components/LoadingSkeleton';
import AppContainer from 'layouts/AppContainer';
import React from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <React.Suspense fallback={<LoadingSkeleton />}>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<AppContainer />} />
            </Routes>
          </BrowserRouter>
        </React.Suspense>
      </Provider>
      <ToastContainer autoClose={3000} />
    </ErrorBoundary>
  );
};

export default App;
