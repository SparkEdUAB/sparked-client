import React from 'react';
import Home from './Pages/Home';

const isDark = true;
if (isDark) {
  require('@elastic/eui/dist/eui_theme_dark.css');
} else {
  require('@elastic/eui/dist/eui_theme_light.css');
}

const App: React.FC = () => {
  return <Home />;
};

export default App;
