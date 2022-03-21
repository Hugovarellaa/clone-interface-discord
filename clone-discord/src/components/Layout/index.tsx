import { ChannelInfor } from "../ChannelInfor";
import { ChannelList } from "../ChannelList";
import ServerList from "../ServerList";
import { ServerName } from "../ServerName";
import { UserInfor } from "../UserInfor";
import { Container } from "./styles";

export const Layout: React.FC = () => {
  return (
    <>
      <Container>
        <ServerList />
        <ServerName />
        <ChannelInfor />
        <ChannelList />
        <UserInfor />
      </Container>
    </>
  );
};
