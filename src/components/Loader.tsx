import { FaSpinner } from 'react-icons/fa';

export const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2 animate-pulse">
      <FaSpinner className="animate-spin text-[#64FFDA]" size={40} />
      <p className="text-center text-white text-xl font-semibold font-inter">Carregando dados...</p>
    </div>
  );
};

