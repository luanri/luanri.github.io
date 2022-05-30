function Perfil(props) {

  const tituloPagina = <h1>Olá,<br />meu nome é<br />{props.meuNome}!</h1>;
  const minhaFoto = <img src={props.arquivoFoto} className="inline_img"></img>;

  const perfilContent = (
    <div>
      <div className="nome">
        {tituloPagina}
      </div>
      <div>
        {minhaFoto}
      </div>
    </div>);

  return perfilContent;
}


ReactDOM.render(
  <Perfil meuNome="Luan Riquelme" arquivoFoto='perfil.jpg' />,
  document.getElementById('root')
);