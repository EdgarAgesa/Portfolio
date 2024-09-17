import React from 'react';
import AppRoutes from './components/routes';

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden"> {/* Prevents horizontal scroll */}
      <AppRoutes />
    </div>
  );
};

export default App;
