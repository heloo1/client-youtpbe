import React, { useEffect } from 'react';
import Home from '~/pages/home';
import Watch from '~/pages/watch';
import Login from '~/pages/Login';
import CardVideo from '~/components/CardVideo';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Suspense, Fragment } from 'react';
import routes from '~/routes/routes';
import AuthComposition from '~/components/AuthComposition';
import useAuthStore from '~/store/useAuthStore';

const App = () => {
    const { fetchUser, isFetchedUser } = useAuthStore((state) => state);

    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <>
            {isFetchedUser && (
                <Suspense fallback={<div>loading</div>}>
                    <BrowserRouter>
                        <Routes>
                            {routes.map((item) => {
                                const DefaultLayout = item?.layout || Fragment;
                                const needAuth = item.private;
                                const Component = !needAuth
                                    ? item.component
                                    : AuthComposition(item.component);

                                return (
                                    <Route
                                        path={item.path}
                                        key={item.path}
                                        element={
                                            <>
                                                <DefaultLayout>
                                                    <Component />
                                                </DefaultLayout>
                                            </>
                                        }
                                    ></Route>
                                );
                            })}
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            )}
            {!isFetchedUser && <div>loading user</div>}
        </>
    );
};

export default App;
