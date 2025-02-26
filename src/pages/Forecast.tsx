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


const Forecast = () => {
  const [data, setData] = useState<ForecastData[]>([]); // Estado tipado

  useEffect(() => {
    axios.get<ForecastData[]>('http://localhost:3000/forecast')
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);
  

  return (
    <>
      <header className='w-full flex justify-center'>
        <h1>ZBMFGuru</h1>
      </header>
      <main>
        <div className='p-4'>
          {data.length > 0 ? (
            data.map((item, index) => (
              <div key={item._id} className='border p-4 my-2'>
                <h2 className='text-lg font-bold'>Forecast {index + 1}</h2>
                <p>
                  Time:{' '}
                  {new Intl.DateTimeFormat('pt-BR', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                    timeZone: 'UTC',
                  }).format(new Date(item.time))}
                </p>
                <p>Primary Swell Direction: {item.swell.direction}°</p>
                <p>Primary Swell Height: {item.swell.height}m</p>
                <p>Período Swell: {item.swell.period}</p>
                <p>Wind Direction: {item.wind.direction}°</p>
                <p>Wave Height: {item.wave.height}m</p>
              </div>
            ))
          ) : (
            <p>Carregando dados...</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Forecast;
