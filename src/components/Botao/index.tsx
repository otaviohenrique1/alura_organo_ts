import { ReactNode } from "react";
import "./Botao.css";

interface BotaoProps {
  children: ReactNode;
}

const Botao = (props: BotaoProps) => {
  return (
    <button className="botao">
      {props.children}
    </button>
  );
};

export default Botao;