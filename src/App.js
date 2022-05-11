import './App.css';
import Footer from './components/Footer';
import GetItems from './service/GetItems';
import { BrowserRouter, Link, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/menu1">Home</Link>
        <Link to="/menu2/p01">Items</Link>
        <Link to="/menu3/p02/456">Log In</Link>
        <Routes>
            <Route exact path="/" component={Menu1} />
            <Route path="/menu1" component={Menu1} />
            <Route path="/menu2/:id" component={Menu2} />
            <Route path="/menu3/:id1/:id2" component={Menu3} />
        </Routes>
      </BrowserRouter>
      <GetItems></GetItems>
      <Footer></Footer>
    </div>
  );
};

function Menu1 () {
  return (
    <h3>Menu 1</h3>
  );
};

function Menu2 () {
  return (
    <h3>Menu 2</h3>
  );
};

function Menu3 () {
  return (
    <h3>Menu 3</h3>
  );
};

export default App;
