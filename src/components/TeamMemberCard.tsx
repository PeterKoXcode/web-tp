import { Card } from "react-bootstrap";

type TeamMemberCardProps = {
  member: {
    id: number;
    name: string;
    bio: string;
  };
};

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="text-center">{member.name}</Card.Title>
        <Card.Text className="text-left">{member.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
}
