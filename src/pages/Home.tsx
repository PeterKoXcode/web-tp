import { Container } from "react-bootstrap";

export function Home() {
  return (
    <>
      <Container className="pt-3" style={{
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        display: "flex"
      }}>
        <h1 className="text-center">🎄🎅🎁 WELCOME 🎄🎅🎁 </h1>
      </Container>
    </>
  );
}
