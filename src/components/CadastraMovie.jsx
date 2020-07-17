import React from 'react';

class CadastraMovie extends React.Component {
  render() {
    const texto = ['Título', 'Subtítulo', 'Imagem'];// , 'Sinopse', 'Avaliação', 'Gênero'
    const { contador, campo, estado, func } = this.props;
    return (
      <fieldset>
        <label htmlFor={campo}>{texto[contador]}</label>
        <input key={contador} name={campo} type="text" value={estado} onChange={func} />
      </fieldset>
    );
  }
}

export default CadastraMovie;
