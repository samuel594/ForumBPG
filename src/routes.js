import { Route, Routes } from "react-router-dom";

import categoriesConfig from "./categories-config";

import Home from './pages/home';
import Team from './pages/team'
import Forum from "./pages/forum";
import Topic from "./pages/topic";
import Auth from "./pages/auth";
import Profile from './pages/profile';

const AppRoutes = (props) => {
  let preloadedData = {
    fixedTopics: []
  }

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/forum" element={<Home/>} />
      <Route path="/team" element={<Team />} />
      <Route path="/profile/settings" element={<Profile />} />
      {
        categoriesConfig.map((section)=>(
          section.categories.map((category, i)=>(
            <Route path={category.href} element={<Forum title={category.title} />} key={i} />
          ))
        ))
      }
      <Route path="/t/*" >
        <Route path=":key" element={<Topic />} />
      </Route>
      
    </Routes>
  );
};

export default AppRoutes;