import { Button } from "@mui/material";
import { BrowserRouter, Link, Routes, Route, Router } from "react-router-dom";
import App from "../App";
import Login from "./Login";

const Header = () => {
    return (
        <div className="NavegationBar">
            <BrowserRouter>
            <Link to="/menu1">Home</Link>
            <Link to="/menu2/p01">Items</Link>
            <Link to="/menu3/p02/456">Log In</Link>
            <br /><br />
            <Routes>
                <Route exact path="/" component={Menu1} />
                <Route path="/menu1" component={Menu1} />
                <Route path="/menu2/:id" component={Menu2} />
                <Route path="/menu3/:id1/:id2" component={Menu3} />
            </Routes>
            <br /><br />
            Copyright PMK Lab
            </BrowserRouter>
        </div>
    )
};

let Menu1 = () => {
    return (
      <h3>Menu 1</h3>
    );
  };
  
  let Menu2 = (props) => {
    const { id } = props.match.params
    return (
      <div>
        <h3>Menu 2</h3>
        id: {id}
      </div>
    );
  };
  
  let Menu3 = (props) => {
    const { id1, id2 } = props.match.params
    return (
      <div>
        <h3>Menu 3</h3>
        id1: {id1}
        <br />
        id2: {id2}
      </div>
    );
  };

export default Header;