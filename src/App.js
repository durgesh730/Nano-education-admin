// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginScreen/LoginForm';
import Register from './components/LoginScreen/Register';
import ForgetPasswordForm from './components/ForgetPassword/ForgetPasswordForm';
import NewPasswordForm from './components/NewPasswordScreen/NewPasswordForm';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/register" component={Register} />
        <Route path="/forgotPassword" component={ForgetPasswordForm} />
        <Route path="/newPassword" component={NewPasswordForm} />
        <Route path="/Dashboard" component={Dashboard} />
        {/* Add more routes here */}
      </Switch>
    </Router>
  );
};

export default App;


