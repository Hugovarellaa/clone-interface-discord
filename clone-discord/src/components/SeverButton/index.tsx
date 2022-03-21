import React from "react";
import { Button } from "./styles";
import logoImg from "../../assets/Logo.svg";

export interface SeverButtonProps {
  selected?: boolean;
  isHome?: boolean;
  hasNotification?: boolean;
  mentions?: number;
}

export const SeverButton: React.FC<SeverButtonProps> = ({
  selected,
  isHome,
  hasNotification,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src={logoImg} alt="Logo da Rocketseat" />}
    </Button>
  );
};
