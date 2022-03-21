import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline";

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;

  padding: 0 17px;
  background: var(--primary);

  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`;

export const Title = styled.h1`
  margin-left: 9px;
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;

export const Separador = styled.div`
  height: 24px;
  width: 1px;

  background-color: var(--white);
  opacity: 0.2;

  margin: 0 13px;
`;

export const Description = styled.span`
  font-size: 15px;
  color: var(--gray);
`;
