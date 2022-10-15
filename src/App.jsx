import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Mailer from "./components/Mailer";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                    <Navbar />
                    <Hero />
                     
                    <Mailer />
                    <About />
                    <Footer /></>
                    }
                    ></Route>
                    <Route path="/translate" element={<>
                    <Navbar />
                    <Form />
                    <Footer />
                    </>}
                    ></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
