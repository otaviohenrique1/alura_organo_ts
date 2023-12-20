import "./Time.css";
import Colaborador from '../Colaborador';
import IColaborador from '../../compartilhado/interfaces/IColadorador';

interface TimeProps {
  nome: string;
  corPrimaria: string;
  corSecundaria: string;
  colaboradores: IColaborador[];
}

const Time = (props: TimeProps) => {
  return (
    (props.colaboradores.length > 0) ? (
      <section className="time" style={{ backgroundColor: props.corSecundaria }}>
        <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={props.corPrimaria}
                data={colaborador.data}
              />
            );
          })}
        </div>
      </section>
    ) : <></>
  );
};

export default Time;