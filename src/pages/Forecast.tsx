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
    <>
      <header className="w-full text-center fixed top-0 left-0 bg-gradient-to-b from-[#0A192F] to-[#112240] py-4 shadow-lg z-10">
        <h1 className="text-4xl font-extrabold text-[#64FFDA] tracking-wide">ZBMFGuru</h1>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-t from-[#112240] to-[#1A2A47]">
        {loading ? (
          <Loader />
        ) : (
          <ForecastTable data={data} />
        )}
      </main>
    </>
  );
};
