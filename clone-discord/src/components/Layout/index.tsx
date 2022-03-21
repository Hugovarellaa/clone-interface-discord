import ServerList from "../ServerList";
import { Container } from "./styles";

export const Layout: React.FC = () => {
  return (
    <>
      <Container>
        <ServerList />
      </Container>
    </>
  );
};
