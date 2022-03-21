import React from "react";
import { Container, Role, User, Avatar } from "./styles";

interface UserRowprops {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserRowprops> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

export const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Hugo Alves Varella" />

      <Role>Disponível - 18</Role>
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" isBot />
    </Container>
  );
};
