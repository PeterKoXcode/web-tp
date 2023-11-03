import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { MinuteBook } from "./pages/MinuteBook";

type Props = {};

export function App({}: Props) {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/minute-book" element={<MinuteBook />} />
        </Routes>
      </Container>
    </>
  );
}
