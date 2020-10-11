import React from 'react';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import Lobby from './screens/lobby/Lobby';
import RouterFile from './RouterFile';

function App() {
  return (
    <div>
      <RouterFile />
      {/* <Lobby /> */}
    </div>
  );
}

export default App;
