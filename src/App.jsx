import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import HomeLayout from "./pages/Home/HomeLayout.jsx";
import Login from "./pages/Login/index.jsx";
import Register from "./pages/Register/index.jsx";
import ChangePassword from "./pages/ChangePassword/index.jsx";
import NotFoundPage from "./pages/NotFoundPage/index.jsx";

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeLayout/>}>
            <Route index={true} element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="changePassword" element={<ChangePassword/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    </Routes>
  )
}

export default App
