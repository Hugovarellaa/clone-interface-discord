import { Container, Avatar, Messages, Header, Content } from "./styles";
export { Mention } from "./styles";

export interface ChannelMessageProps {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  rashMention?: boolean;
  isBot?: boolean;
}

export const ChannelMessage: React.FC<ChannelMessageProps> = ({
  author,
  content,
  date,
  isBot,
  rashMention,
}) => {
  return (
    <>
      <Container className={rashMention ? "mention" : ""}>
        <Avatar className={isBot ? "bot" : ""} />

        <Messages>
          <Header>
            <strong>{author}</strong>
            {isBot && <span>Bot</span>}
            <time>{date}</time>
          </Header>
          <Content>{content}</Content>
        </Messages>
      </Container>
    </>
  );
};
