import "./CampoTexto.css";

interface CampoTextoProps {
  label: string;
  placeholder: string;
  valor: string;
  aoAlterado: (valor: string) => void;
  obrigatorio?: boolean;
  tipo?: "text" | "password" | "date" | "email" | "number";
}

const CampoTexto = ({ aoAlterado, label, placeholder, valor, obrigatorio = false, tipo = "text" }: CampoTextoProps) => {
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
        type={tipo}
      />
    </div>
  );
};

export default CampoTexto;