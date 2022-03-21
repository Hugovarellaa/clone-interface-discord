import { ChannelInfor } from "../ChannelInfor";
import ServerList from "../ServerList";
import { ServerName } from "../ServerName";
import { Container } from "./styles";

export const Layout: React.FC = () => {
  return (
    <>
      <Container>
        <ServerList />
        <ServerName />
        <ChannelInfor />
      </Container>
    </>
  );
};
