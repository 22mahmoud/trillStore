import React from 'react';
import { push } from 'connected-react-router';
import { store } from '../store';

const Profile = () => (
  <button type="button" onClick={() => store.dispatch(push('/'))}>
    goBack
  </button>
);

export default Profile;
