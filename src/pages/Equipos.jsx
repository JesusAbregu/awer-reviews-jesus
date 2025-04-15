import { useEffect, useState } from 'react';
import API from '../services/api';

export default function Equipos() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    API.get('/equipos').then(res => setEquipos(res.data));
  }, []);

  return (
    <div>
      <h2>Equipos</h2>
      <ul>
        {equipos.map(e => (
          <li key={e.id}>{e.nombre} - {e.liga} ({e.pais})</li>
        ))}
      </ul>
    </div>
  );
}
