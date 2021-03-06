import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import Auth from './user/pages/Auth';
import NewPlace from './places/pages/NewPlace';
import UpdatePlace from './places/pages/UpdatePlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

const  App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  console.log(token)

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/:userId/places" component={UserPlaces} />
        <Route path="/places/new" exact component={NewPlace} />
        <Route path="/places/:placeId" component={UpdatePlace} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/:userId/places" component={UserPlaces} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider 
      value={{
        isLoggedIn: !!token,
        token,
        userId, 
        login, 
        logout
      }}>
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
