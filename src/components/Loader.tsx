import { FaSpinner } from 'react-icons/fa';

export const Loader: React.FC = () => {
  return (
    <div className="">
      <FaSpinner className="animate-spin" size={40} />
    </div>
  );
};

