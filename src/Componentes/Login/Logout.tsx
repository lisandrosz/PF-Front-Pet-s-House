import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => {
        logout({ logoutParams: { returnTo: window.location.origin } });
        localStorage.clear();
      }}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
