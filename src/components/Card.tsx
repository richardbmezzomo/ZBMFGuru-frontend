import React from 'react';
import { FaWind } from 'react-icons/fa';
import { ForecastData } from '../types';
import { motion } from 'framer-motion';

interface CardProps {
  item: ForecastData;
  index: number;
}

export const Card: React.FC<CardProps> = ({ item, index }) => {
  return (
    <motion.div
      key={item._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="max-w-xs w-full border border-gray-500 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <h2 className="text-xl font-semibold text-[#64FFDA] mb-4">Forecast {index + 1}</h2>
      <p className="text-gray-200 mb-2">
        <strong>Time:</strong>{' '}
        {new Intl.DateTimeFormat('pt-BR', {
          dateStyle: 'short',
          timeStyle: 'short',
          timeZone: 'UTC',
        }).format(new Date(item.time))}
      </p>
      <div className="text-gray-200 mb-3">
        <strong>Primary Swell:</strong> {item.swell.height}m ({item.swell.direction}°) - {item.swell.period}s
      </div>
      <div className="flex items-center text-gray-200 mb-3">
        <FaWind className="mr-2 text-[#64FFDA]" />
        <strong>Wind:</strong> {item.wind.direction}° | {item.wind.speed}m/s
      </div>
      <div className="text-gray-200">
        <strong>Wave Height:</strong> {item.wave.height}m
      </div>
    </motion.div>
  );
};
