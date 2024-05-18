import { Col, Container, Row } from "react-bootstrap";
import { TeamMemberCard } from "../components/TeamMemberCard";
import teamMembers from "../data/members.json";

type Props = {};

export function Team({}: Props) {
  return (
    <>
      <div
        className="py-5 pt-8"
        style={{
          width: "100%",
          height: "100%",
          margin: 0,
          background: "#42455a",
          color: "white",
        }}
      >
        
          <h1 className="mb-5 text-center" style={{
            background: "#42404a",
            padding: "20px",
            borderTop: "1px rgb(113 116 131) solid",
            borderBottom: "1px rgb(113 116 131) solid",
          }}>Členovia tímu</h1>
          <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            {teamMembers.map((member) => (
              <Col key={member.id} lg={4} md={6}>
                <TeamMemberCard member={member} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
