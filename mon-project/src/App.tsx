import React ,{useState}from 'react';
import './App.css';
import Formulaire from './Components/Formulaire'; 
function App(): JSX.Element { const [isNightMode, setIsNightMode] = useState(false);

  const toggleMode = () => {
    setIsNightMode(!isNightMode);
  };
  return (
    <div className={`App ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <button onClick={toggleMode}>Basculez le mode</button>
      <Formulaire/>
    </div>
  );
}

export default App;
