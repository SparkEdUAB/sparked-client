import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './components/auth/Login';

// todo: Find a way to dynamically change these styles
const isDark = true;
if (isDark) {
  require('@elastic/eui/dist/eui_theme_dark.css');
} else {
  require('@elastic/eui/dist/eui_theme_light.css');
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
