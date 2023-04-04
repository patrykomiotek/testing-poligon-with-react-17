import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { store } from './store';

import { HomePage } from '@pages/HomePage';
import { Menu } from '@molecules/Menu';
import { LoanPage } from '@pages/LoanPage';
// import { ProductsPage } from '@pages/ProductsPage';
import { ProductPage } from '@pages/ProductPage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { ProductsList as ProductsListRedux } from '@components/ProductsList/ProductsLists.redux';
import { ProductsList as ProductsListQuery } from '@components/ProductsList/ProductsList.query';
import { ProductsListWithUseApi as ProductsListHook } from '@components/ProductsList/ProductsListWithUseApi';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Menu />
            <Routes>
              <Route path="/products-hook" element={<ProductsListHook />} />
              <Route path="/products-query" element={<ProductsListQuery />} />
              <Route path="/products-redux" element={<ProductsListRedux />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/registration" element={<RegistrationPage />} />
              <Route path="/loan" element={<LoanPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ReduxProvider>
    </div>
  );
}

export default App;
