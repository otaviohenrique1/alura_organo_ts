import "./CampoTexto.css";

interface CampoTextoProps {
  label: string;
  placeholder: string;
  obrigatorio: boolean;
  valor: string;
  aoAlterado: (valor: string) => void;
}

const CampoTexto = ({ aoAlterado, label, obrigatorio, placeholder, valor }: CampoTextoProps) => {
  const placeholderModificada = `${placeholder}...`

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  }

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        placeholder={placeholderModificada}
        required={obrigatorio}
      />
    </div>
  );
};

export default CampoTexto;