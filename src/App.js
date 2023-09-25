import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import routes from "./config/routes";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

function App() {
  const {user, login} = useContext(UserContext);

  useEffect(() => {
    if(localStorage.getItem("token")){
      login(localStorage.getItem("email"), localStorage.getItem("token"))
    }
  }, [])

  console.log(user)
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.login} element={<Login />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
