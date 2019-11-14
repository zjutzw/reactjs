import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <div id="namelist"></div>
  <input type="text" name="name" id="inputname" />
<button onClick={addname}>addname</button>

    </main>
  );
}

export default App;
