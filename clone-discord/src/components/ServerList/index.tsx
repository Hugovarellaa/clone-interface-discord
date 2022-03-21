import React from "react";
import { Container, Separator } from "./styles";
import { SeverButton } from "../SeverButton/index";

const ServerList: React.FC = () => {
  return (
    <Container>
      <SeverButton isHome />

      <Separator />

      <SeverButton  mentions={123}/>
      <SeverButton hasNotification />
      <SeverButton mentions={13} />
      <SeverButton />
      <SeverButton />
      <SeverButton hasNotification />
      <SeverButton hasNotification />
      <SeverButton />
      <SeverButton mentions={32} />
      <SeverButton />
      <SeverButton />
    </Container>
  );
};

export default ServerList;
