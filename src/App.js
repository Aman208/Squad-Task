import React from 'react';

import './App.css';


import { Menu } from 'semantic-ui-react'

const items = [
  { key: 'editorials', active: true, name: 'Editorials' },
  { key: 'review', name: 'Reviews' },
  { key: 'events', name: 'Upcoming Events' },
]

const MenuExampleProps = () => <Menu items={items} />

function App() {
  return (
    <div className="App">
     <MenuExampleProps/>
    </div>
  );
}

export default App;
