import axios from 'axios';
import { useEffect, useState } from 'react';

interface Swell {
  direction: number;
  height: number;
  period: number;
}

interface Wave {
  direction: number;
  height: number;
  period: number;
}

interface Wind {
  direction: number;
  speed: number;
  wave?: Wave; 
}

interface ForecastData {
  _id: string; 
  time: string; 
  secondarySwell: Swell; 
  swell: Swell; 
  wave: Wave; 
  wind: Wind; 
}


export const Forecast = () => {
  const [data, setData] = useState<ForecastData[]>([]);

  useEffect(() => {
    axios.get<ForecastData[]>('http://localhost:3000/forecast')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  return (
    <>
      {/* Cabeçalho centralizado */}
      <header className="w-full text-center fixed top-0 left-0 bg-gradient-to-b from-[#0A192F] to-[#112240]">
        <h1 className="text-3xl font-bold text-[#64FFDA]">ZBMFGuru</h1>
      </header>

      {/* Container centralizado na tela */}
      <main className="flex items-center justify-center min-h-screen p-4">
        {data.length > 0 ? (
          <div className="flex space-x-6 overflow-x-auto p-4">
            {data.map((item, index) => (
              <div 
                key={item._id} 
                className="min-w-[300px] border p-6 rounded-xl shadow-md text-center"
              >
                <h2 className="text-lg font-bold">Forecast {index + 1}</h2>
                <p>
                  <strong>Time:</strong>{' '}
                  {new Intl.DateTimeFormat('pt-BR', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                    timeZone: 'UTC',
                  }).format(new Date(item.time))}
                </p>
                <p><strong>Primary Swell:</strong> {item.swell.height}m ({item.swell.direction}°) - {item.swell.period}s</p>
                <p><strong>Wind:</strong> {item.wind.direction}° | {item.wind.speed}m/s</p>
                <p><strong>Wave Height:</strong> {item.wave.height}m</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">Carregando dados...</p>
        )}
      </main>
    </>
  );
};

