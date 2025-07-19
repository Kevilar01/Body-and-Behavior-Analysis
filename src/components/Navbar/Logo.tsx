
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center group flex-shrink-0">
      <img 
        src="/lovable-uploads/75e6c814-79ad-47b7-b3ff-29cb1da30e76.png"
        alt="Body and Behavior Analysis logo"
        className="h-16 sm:h-20 w-auto transition-opacity duration-300 group-hover:opacity-80"
      />
    </Link>
  );
};

export default Logo;
