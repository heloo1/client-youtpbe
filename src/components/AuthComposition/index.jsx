import useAuthStore from '~/store/useAuthStore';
import { Navigate } from 'react-router-dom';
import React from 'react';
const AuthComposition = (Component) => {
    const user = useAuthStore((state) => state.user);
    return function (props) {
        if (!Boolean(user)) {
            return <Navigate to={'/login'} />;
        }

        return <Component {...props} />;
    };
};

export default AuthComposition;
