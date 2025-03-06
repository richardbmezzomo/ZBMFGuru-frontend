import { useEffect, useState } from "react";
import axios from "axios";
import { ForecastTable } from "../components/ForecastTable";
import { Loader } from "../components/Loader";
import { ForecastData } from "../types";
import { mockForecastData } from "../mockData";

export const Forecast = () => {
  const [data, setData] = useState<ForecastData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ForecastData[]>("http://localhost:3000/forecast");
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados, usando mock:", error);
        setData(mockForecastData);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(fetchData, 1000);
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-400 to-teal-600" >
      <header className="w-full text-center fixed top-0 left-0 shadow-md z-20 bg-sand">
        <h1 className="text-5xl font-extrabold tracking-wide text-ocean font-logo">ZBMF Guru</h1>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen">
        {loading ? (
          <Loader />
        ) : (
          <div className="w-full bg-white shadow-lg overflow-hidden rounded-lg">
            <ForecastTable data={data} />
          </div>
        )}
      </main>
    </div>
  );
};
