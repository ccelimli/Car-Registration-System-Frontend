import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import HomeLayout from "./pages/Home/HomeLayout.jsx";
import Login from "./pages/Login/index.jsx";
import Register from "./pages/Register/index.jsx";
import ChangePassword from "./pages/ChangePassword/index.jsx";
import NotFoundPage from "./pages/NotFoundPage/index.jsx";
import AuthRoute from "./components/PrivateRoutes/AuthRoute.jsx";

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeLayout/>}>
            <Route index={true} element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="home" element={<AuthRoute><Home/></AuthRoute>}/>
            <Route path="changePassword" element={<AuthRoute><ChangePassword/></AuthRoute>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    </Routes>
  )
}

export default App
