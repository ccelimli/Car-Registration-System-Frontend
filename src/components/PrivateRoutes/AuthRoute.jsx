import {Navigate} from "react-router-dom";

const AuthPrivate = ({children}) => {
    const data = localStorage.getItem("isAuth")
    const parseData = data !== null ? JSON.parse(data) : null

    if (parseData === null && parseData?.isActive !== 'true') {
        return (
            <Navigate
                to={"/"}
            />
        )
    }

    return children
}

export default AuthPrivate