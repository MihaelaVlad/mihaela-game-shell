import { GiAbstract101 } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <h1 className="uppercase font-bold text-lg inline-block">
        <Link to="/" title="Home" className="flex gap-3">
          <GiAbstract101 size={32} className="inline-block"></GiAbstract101>
          Game Shell
        </Link>
      </h1>
    </div>
  );
};
