import { ChannelData } from "../ChannelData";
import { ChannelInfor } from "../ChannelInfor";
import { ChannelList } from "../ChannelList";
import ServerList from "../ServerList";
import { ServerName } from "../ServerName";
import { UserInfor } from "../UserInfor";
import { UserList } from "../UserList";
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
        <ChannelData />
        <UserList />
      </Container>
    </>
  );
};
