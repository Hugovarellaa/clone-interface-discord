import { useEffect, useRef } from "react";
import { ChannelMessage, Mention } from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

export const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  //Quando a pessoa entra na pagina scrollar pro final da lista
  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <>
      <Container>
        <Messages ref={messagesRef}>
          {Array.from(Array(22).keys()).map((n) => (
            <ChannelMessage
              author="Hugo Varella"
              date="21/03/2022"
              content="Isso é uma mensagem."
            />
          ))}

          <ChannelMessage
            author="Fulano"
            date="21/03/2022"
            content={
              <>
                <Mention>@Hugo Varella</Mention> me carrega no LoL e CS de novo
                por favor?
              </>
            }
          />
        </Messages>

        <InputWrapper>
          <Input type="text" placeholder="Conversar em #chat-livre" />
          <InputIcon />
        </InputWrapper>
      </Container>
    </>
  );
};
