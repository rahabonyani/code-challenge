import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomePage from "../Pages/Public/HomePage";
import Seller from "../Pages/Public/Seller";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/seller">
                    <Seller />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
