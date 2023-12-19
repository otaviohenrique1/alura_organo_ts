import PropTypes from 'prop-types';
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        placeholder={placeholderModificada}
        required={props.obrigatorio}
      />
    </div>
  );
};

CampoTexto.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  obrigatorio: PropTypes.bool,
  valor: PropTypes.any,
  aoAlterado: PropTypes.any
}

export default CampoTexto;