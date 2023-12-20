import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  label: string;
  itens: string[];
  obrigatorio: boolean;
  valor: string;
  aoAlterado: (valor: string) => void;
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label htmlFor="">{props.label}</label>
      <select
        value={props.valor}
        onChange={evento => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
      >
        <option value=""></option>
        {props.itens.map((item) => {
          return (
            <option key={item} value={item}>{item}</option>
          );
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;