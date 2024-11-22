import React from "react";
import routes from './routes/route';
import { useRoutes } from "react-router-dom";

function App() {
  const showRoutes = useRoutes(routes);
  return (<>
    {showRoutes}
  </>
  )
}

export default App;
