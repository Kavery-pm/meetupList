import { Route, Switch } from "react-router";
import Layout from "./components/Layout/layout";
import MainNavigation from "./components/Layout/MainNavigation";
import AllMeetUps from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetup";

function App() {
  return (
   <Layout>
   
      <Switch>
        <Route path="/" exact>
          <AllMeetUps></AllMeetUps>
        </Route>
        <Route path="/new-meetup">
          <NewMeetups></NewMeetups>
        </Route>
        <Route path="/favorites">
          <Favorites></Favorites>
        </Route>
      </Switch>
 </Layout>
  );
}

export default App;
