import React from "react";
import { ForecastData } from "../types";
import { FiArrowUp } from "react-icons/fi";

interface ForecastTableProps {
  data: ForecastData[];
}

export const ForecastTable: React.FC<ForecastTableProps> = ({ data }) => {
  if (!data.length) {
    return <p className="text-gray-600 text-center py-6">Nenhum dado disponível</p>;
  }

  const headers = data.map((item) => {
    const formattedDate = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    }).format(new Date(item.time));
    return formattedDate.split(", ");
  });

  const rows = [
    { label: "Direção Swell A (°)", key: "swell.direction" },
    { label: "Altura Swell A (m)", key: "swell.height" },
    { label: "Período Swell A (s)", key: "swell.period" },
    { label: "Direção Swell B (°)", key: "secondarySwell.direction" },
    { label: "Altura Swell B (m)", key: "secondarySwell.height" },
    { label: "Período Swell B (s)", key: "secondarySwell.period" },
    { label: "Direção Vagas (°)", key: "wave.direction" },
    { label: "Altura Vagas (m)", key: "wave.height" },
    { label: "Período Vagas (s)", key: "wave.period" },
    { label: "Direção Vento (°)", key: "wind.direction" },
    { label: "Velocidade Vento (km/h)", key: "wind.speed" },
    { label: "Altura Onda (m)", key: "wave.height" },
  ];

  return (
    <div className="w-full overflow-auto max-h-[80vh] p-4 rounded-lg shadow-xl bg-white/40 backdrop-blur-md">
      <table className="w-full min-w-[1000px] border-collapse border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="sticky left-0 bg-blue-900 border border-gray-300 px-6 py-4 font-bold text-white z-40 min-w-[320px] shadow-xl">
              Parâmetro
            </th>
            {headers.map(([date, time], index) => (
              <th key={index} className="border border-gray-300 px-4 py-4 text-center text-sm">
                <span className="block font-semibold">{date}</span>
                <span className="block text-xs opacity-75">{time}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-blue-50 transition-colors`}
            >
              <td className="sticky left-0 bg-gray-100 border border-gray-300 px-6 py-4 font-semibold text-gray-900 z-30 min-w-[220px] shadow-lg">
                {row.label}
              </td>
              {data.map((item, colIndex) => {
                const keys = row.key.split(".");
                const value = keys.reduce((acc: any, key) => acc?.[key], item);

                return (
                  <td
                    key={colIndex}
                    className="px-6 py-4 text-center border border-gray-300 text-gray-800 font-medium"
                  >
                    {typeof value === "number" ? (
                      row.key.includes("direction") ? (
                        <span className="flex items-center justify-center gap-2">
                          <FiArrowUp
                            className="text-blue-600"
                            style={{ transform: `rotate(${value}deg)`, transition: "transform 0.3s ease" }}
                          />
                          <span className="text-xs font-semibold">{value}°</span>
                        </span>
                      ) : row.key.includes("wind.speed") ? (
                        <span className="text-blue-700">{(value * 3.6).toFixed(1)} km/h</span>
                      ) : row.key.includes("period") ? (
                        <span className="text-green-700">{Math.round(value)} s</span>
                      ) : (
                        <span className="text-gray-900">{value.toFixed(2)}</span>
                      )
                    ) : (
                      "-"
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
