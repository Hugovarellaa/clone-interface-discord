import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles";

interface ChannelButtonProps {
  channelName: string;
  selected?: boolean;
}

export const ChannelButton: React.FC<ChannelButtonProps> = ({
  channelName,
  selected,
}) => {
  return (
    <>
      <Container className={selected ? "active" : ""}>
        <div>
          <HashtagIcon />
          <span>{channelName}</span>
        </div>
        <div>
          <InviteIcon />
          <SettingsIcon />
        </div>
      </Container>
    </>
  );
};
