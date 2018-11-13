import React, { useState, useEffect } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { useUserContext } from '../context/UserContextProvider';
import { authService } from '../api';

const PrivateRoute = React.memo(({ component: Component, ...rest }) => {
  const { user, setUser } = useUserContext();
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');
  useEffect(async () => {
    try {
      if (!token) {
        localStorage.removeItem('token');
        localStorage.removeItem('user-data');
        rest.history.push('/login');
      } else {
        const res = await authService.me();
        localStorage.setItem('user-data', JSON.stringify(res));
        setUser(res);
      }
    } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('user-data');
      rest.history.push('/login');
    }
    setLoading(false);
  }, []);

  return loading ? null : (
    <Route
      {...rest}
      render={props => (user ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      ))
      }
    />
  );
});

export default withRouter(PrivateRoute);
