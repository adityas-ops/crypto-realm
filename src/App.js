import './App.css';
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {

    return ( <
        BrowserRouter >
        <
        div style = {
            { background: "#14161a", color: "white", minHeight: "100vh" } } >
        <
        Header / >
        <
        Routes >

        <
        Route path = "/"
        element = { < HomePage / > }
        /> <
        Route path = "/coins/:id"
        element = { < CoinPage / > }
        />


        <
        /Routes> <
        /div> <
        /BrowserRouter>

    );
}

export default App;