import { GiAbstract101 } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../../store/actions/authActions';
import { GoogleLogin } from '../../auth/GoogleLogin';
import { Button } from '../ui';

export const Header = () => {
  const dispatch = useDispatch();
  const { authenticated } = useSelector(({ auth }) => {
    const { authenticated } = auth;

    return { authenticated };
  });

  return (
    <div className="container mx-auto px-4 flex justify-between">
      <h1 className="uppercase font-bold text-lg inline-block">
        <Link to="/" title="Home" className="flex gap-3">
          <GiAbstract101 size={32} className="inline-block"></GiAbstract101>
          Game Shell
        </Link>
      </h1>

      <div>
        {authenticated ? (
          <Button
            type="button"
            onClick={() => {
              dispatch(logOut());
            }}
            skin="primaryInverted"
            title="Log out"
          >
            Log out
          </Button>
        ) : (
          <GoogleLogin></GoogleLogin>
        )}
      </div>
    </div>
  );
};
