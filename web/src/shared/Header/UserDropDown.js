import React from 'react';
import { useUserContext } from '../../context/UserContextProvider';

import Link from './Link';
import { DropDown, DropDownMenu, DropDownMenuItem } from '../ui/DropDown';

const UserDropDown = () => {
  const { user, setUser } = useUserContext();
  return (
    <DropDown title={user.firstName}>
      <DropDownMenu>
        <DropDownMenuItem>
          {/* eslint-disable-next-line no-underscore-dangle */}
          <Link to={`/profile/${user._id}`}> Profile </Link>
        </DropDownMenuItem>
        <DropDownMenuItem>
          <Link to="/"> My Orders </Link>
        </DropDownMenuItem>
        <DropDownMenuItem>
          <Link to="/"> Acccount Settings </Link>
        </DropDownMenuItem>
        <DropDownMenuItem>
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user-data');
              setUser(null);
            }}
          >
            <span> logout </span>
          </Link>
        </DropDownMenuItem>
      </DropDownMenu>
    </DropDown>
  );
};

export default UserDropDown;
