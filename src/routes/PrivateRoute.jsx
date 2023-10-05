import { useAuth } from "../context/AuthContext";
import { redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isLoggedIn } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) =>
                isLoggedIn ? (
                    <Component key={props.location.key} {...props} />
                ) : (
                    redirect("/home")
                )
            }
        />
    );
}

export default PrivateRoute;