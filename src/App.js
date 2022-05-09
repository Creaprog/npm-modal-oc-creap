import './App.css';
import Modal from './lib/components/Modal';
import React, { useState } from 'react';

function App() {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <Modal isShowing={isShowing} setIsShowing={setIsShowing} message="Employee Created!" />
  );
}

export default App;
