import {
  Container,
  Profile,
  Avatar,
  Icons,
  UserData,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./styles";

export const UserInfor: React.FC = () => {
  return (
    <>
      <Container>
        <Profile>
          <Avatar />

          <UserData>
            <strong>Hugo Varella</strong>
            <span>#6490</span>
          </UserData>
        </Profile>

        <Icons>
          <MicIcon />
          <HeadphoneIcon />
          <SettingsIcon />
        </Icons>
      </Container>
    </>
  );
};
