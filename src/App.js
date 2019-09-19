import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [techName, setTechName] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...tech, techName]);

    setTechName('');
  }, [techName, tech]);

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize}</strong>
      <input
        type="text"
        value={techName}
        onChange={e => setTechName(e.target.value)}
      />
      <button onClick={handleAdd} type="button">
        Adicionar
      </button>
    </>
  );
}

export default App;
