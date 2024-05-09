import { Container } from "react-bootstrap";
import DownloadButton from "../components/DownloadButton";

export function Home() {
  return (
    <>
      <Container
        className="pt-3"
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          display: "",
        }}
      >
        <h1 className="text-center">WELCOME</h1>
        <div className="text-center w-100 h-100" style={{alignContent: "center"}}>
        <DownloadButton />
        </div>
      </Container>
    </>
  );
}
