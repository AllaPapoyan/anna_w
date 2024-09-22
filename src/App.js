
import './App.css';
import "./assets/style/index.scss"
import Header from "./components/header";
import Router from "./router";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">

        <Header />
       <Router />
        <Footer />
    </div>
  );
}

export default App;
