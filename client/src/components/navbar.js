import React from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import Saved from "./pages/savedpage";
import Home from "./pages/homepage"

function Navbar() {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/">Book Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="savedBooks">Saved Books</Link>
                    </li>
                </ul>
            </nav>
               
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/savedBooks">
                    <Saved />
                </Route>
            </Switch>
        </div>
   )
}

export default withRouter(Navbar);