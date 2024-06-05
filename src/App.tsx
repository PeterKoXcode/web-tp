//import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { MinuteBook } from "./pages/MinuteBook";
import { Team } from "./pages/Team";

type Props = {};

export function App({}: Props) {
  return (
    <>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/minute-book" element={<MinuteBook />} />
      </Routes>
    </>
  );
}
