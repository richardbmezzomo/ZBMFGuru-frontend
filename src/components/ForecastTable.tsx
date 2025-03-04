import React from 'react';
import { ForecastData } from '../types';

interface ForecastTableProps {
  data: ForecastData[];
}

export const ForecastTable: React.FC<ForecastTableProps> = ({ data }) => {
  if (!data.length) {
    return <p className="text-center text-gray-500 text-lg">Nenhum dado disponível</p>;
  }

  const selectedData = data.slice(0, 4); 
  const headers = selectedData.map((item) =>
    new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    }).format(new Date(item.time))
  );

  return (
    <div className="overflow-x-auto w-full max-w-4xl mx-auto">
      <table className="w-full border border-gray-300 bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-500 text-white text-left">
            <th className="border border-gray-400 px-4 py-3 font-semibold">Parâmetro</th>
            {headers.map((header, index) => (
              <th key={index} className="border border-gray-400 px-4 py-3 font-semibold text-center">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {[
            { label: 'Direção Swell A (°)', key: 'swell.direction' },
            { label: 'Altura Swell A (m)', key: 'swell.height' },
            { label: 'Período Swell A (s)', key: 'swell.period' },
            { label: 'Direção Swell B (°)', key: 'secondarySwell.direction' },
            { label: 'Altura Swell B (m)', key: 'secondarySwell.height' },
            { label: 'Período Swell B (s)', key: 'secondarySwell.period' },
            { label: 'Direção Vagas (°)', key: 'wave.direction' },
            { label: 'Altura Vagas (m)', key: 'wave.height' },
            { label: 'Período Vagas (s)', key: 'wave.period' },
            { label: 'Direção Vento (°)', key: 'wind.direction' },
            { label: 'Velocidade Vento (km/h)', key: 'wind.speed' },
            { label: 'Altura Onda (m)', key: 'wave.height' },
          ].map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t even:bg-gray-100 odd:bg-white">
              <td className="border border-gray-400 px-4 py-3 font-medium bg-gray-200">{row.label}</td>
              {selectedData.map((item, colIndex) => {
                console.log(item)
                const keys = row.key.split('.');
                const value = keys.reduce((acc: any, key) => acc?.[key], item);
                return (
                <td key={colIndex} className="border border-gray-400 px-4 py-3 text-center">
                  {typeof value === "number" ? (
                    row.key.includes("direction") ? (
                      <span className="flex items-center justify-center gap-1">
                        <span
                          style={{ display: "inline-block", transform: `rotate(${value}deg)` }}
                        >
                          ↑
                        </span>
                      </span>
                    ) : row.key.includes("wind.speed") ? (
                      (value * 3.6).toFixed(1) 
                    ) : row.key.includes("period") ? (
                      Math.round(value)
                    ) : (
                      value.toFixed(2)
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
