import PropTypes from 'prop-types';
import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
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

ListaSuspensa.propTypes = {
  label: PropTypes.string,
  itens: PropTypes.array,
  obrigatorio: PropTypes.bool,
  valor: PropTypes.any,
  aoAlterado: PropTypes.any
}

export default ListaSuspensa;