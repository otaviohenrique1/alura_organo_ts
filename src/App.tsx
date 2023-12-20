import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';
import IColaborador from './compartilhado/interfaces/IColadorador';

function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }

  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    // console.log(colaborador);
    // debugger
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <>
      <Banner
        enderecoImagem="/images/banner.png"
        textoAlternativo="O banner principal da página do Organo"
      />
      <Formulario
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        times={times.map((time) => time.nome)}
      />
      <div className='colaboradores'>
        {times.map((time) => {
          return (
            <Time
              key={time.nome}
              nome={time.nome}
              corPrimaria={time.corPrimaria}
              corSecundaria={time.corSecundaria}
              colaboradores={colaboradores.filter((colaborador) => {
                return colaborador.time === time.nome
              })}
            />
          );
        })}
      </div>
      <Rodape />
    </>
  );
}

export default App;
