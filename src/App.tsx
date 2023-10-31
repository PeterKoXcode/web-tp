import { Container } from "react-bootstrap"
import { Navbar } from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { MinuteBook } from "./pages/MinuteBook"

type Props = {}

export function App({}: Props) {
  return (
    <>
    <Navbar />
    <Container>
      <Routes>
        <Route path="/web-tp/" element={<Home />} />
        <Route path="/web-tp/about" element={<About />} />
        <Route path="/web-tp/minute-book" element={<MinuteBook />} />
      </Routes>
    </Container>
    </>
  )
}
