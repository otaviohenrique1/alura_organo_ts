import "./Colaborador.css";

interface ColaboradorProps {
  imagem: string;
  nome: string;
  cargo: string;
  corDeFundo: string;
  data: string;
}

const Colaborador = ({ imagem, nome, cargo, corDeFundo, data }: ColaboradorProps) => {
  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
        {/* <img src="https://github.com/otaviohenrique1.png" alt="Otavio Henrique" /> */}
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <h5>{new Date(data).toLocaleDateString()}</h5>
      </div>
    </div>
  );
};

export default Colaborador;