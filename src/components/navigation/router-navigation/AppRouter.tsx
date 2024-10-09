import { Route, Routes } from "react-router-dom";
import { routes } from "../config";

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        {
          routes.map((route, index) => (
            <Route key={index} path={route.path} Component={route.Component} index={route.index}/>
          ))
        }
      </Routes>
    </>
  );
};

export default AppRouter;
