import React from 'react';
import './App.css';
import Functioncomponent from './Functioncomponent';
import Classcomponent from './Classcomponent';
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
