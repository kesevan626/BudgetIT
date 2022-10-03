import React from 'react';
import Layout from './Layout'
import {BudgetProvider} from './context/BudgetContext'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdminPage from './pages/AdminPage';
import CustomerList from './pages/CustomerListPage';
import OrderList from './pages/OrderListPage';
import AddProduct from './pages/AddProduct';
import Settings from './pages/SettingsPage';
import Messages from './pages/Messages';
import Reports from './pages/Reports';
import Analytics from './pages/AnalyticsPage';

function App() {
  return (
      <BudgetProvider>
            <Router>
                  <Layout>
                         <Routes>
                              <Route path="/"  element={<AdminPage />} /> 
                              <Route path="/Dashboard" exact element={<AdminPage />} /> 
                              <Route path="/Customer" exact element={<CustomerList />} />   
                              <Route path="/Order" exact element={<OrderList />} /> 
                              <Route path="/Analytics" exact element={<Analytics />} />   
                              <Route path="/Messages" exact element={<Messages />} />    
                              <Route path="/Report" exact element={<Reports />} />  
                              <Route path="/Settings" exact element={<Settings />} /> 
                              <Route path="/Product" exact element={<AddProduct />} />  
                              <Route path="/log-out" exact element={<AdminPage />} />   
                         </Routes>
                  </Layout>
            </Router>
      </BudgetProvider>
  );
}

export default App;
