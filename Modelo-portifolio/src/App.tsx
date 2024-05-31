import './App.scss'

function App() {
  return (
    <main>
      <div className="container">
        <header>
          <div className='box_logo'>
            <div className='ImageLogo'>
              <img src='https://media.discordapp.net/attachments/1229890616633069623/1239669935253229669/photo_5048695002766617765_x.jpg?ex=6643c418&is=66427298&hm=d1d9d35a2a02446a63d5fd1bfecafddb9c0fbfb5bf1140c90fb8f1977bb56174&=&format=webp&width=480&height=480'/>
            </div>

            <div className="NameHeader">
              <div className='NameHeaderS'> <span>Andressa</span> </div>
              <div className="NameHeaderI"> <span>Rodrigues</span> </div>
            </div>
          </div>

          <div className="menuheader">
            <div className='HeaderSobre'>
              <a href="src/SobreOProjeto/Sobre.tsx">Sobre</a>
            </div>

            <div className='HeaderProjetos'> 
              <a href="src/ComoAjudar/ajuda.tsx">Projetos</a>
            </div>

            <div className='HeaderContato'>
            <a href="src//ajuda.tsx">Contato</a>
            </div>
          </div>
        </header>

        <div className="boxum">
          
          <div className="headerboxum">
            <h1 id='headerboxump1'> 
              Bem vindo!
            </h1>
            <h2 id='headerboxump2'>
              <p>Amante da tecnologia desde pequena, sempre tive curiosidade de como as coisas funcionam e o que poderiam se tornar.</p> 
              <p>Gaúcha, estudante de Ciência da Computação e entusiasta a Desenvolvedora de software busco compreender e colocar em prática os conhecimentos que aquiro ao longo do meus estudo.</p>
              <p>Durante esta cominhada desenvolvi uma paixão por projetos, a faze inicial, proucura por soluçoes, perrengues no meio do caminho e a sesação de gratidao quando se finaliza não tem preço.</p>
            </h2>
          </div>

          <div className="opcoesboxum">
            
              <div>
                <a href="src/Conteudo/conteudo.tsx">Botão1</a>
              </div>
           
              <div>
                <a href="src/Comunidades/comunidades.tsx">Botão2</a>
              </div>
            
              <div>
                <a href="src/noticias/noticias.tsx">Botão3</a>
              </div>
            </div>
        </div>
          
        <div className="boxperfil">

          <h1 id='headerbox'> Perfil </h1>

          <div className="conteinerperfil">
            
            <div className="perfilleft">

              <div className="formacao">
                <h1>Formação</h1>
                <ul>
                  <li> Ciência da Computação, Estácio - em andamento </li>
                  <li> Logística, Unopar - Concluído </li>
                </ul>
              </div>

              <div className="idiomas">
                <h1>Idiomas</h1>
              
                <ul>
                  <li>Portugues, Nativo/Fluente</li>
                  <li>Inglês, Intermediário</li>
                  <li>Chinês, Básico</li>
                </ul>
              </div>
            </div>

            <div className="perfilcenter">
            <div className="competencias">

              <h1>Competências</h1>

              <td>
                  <li> Linguagens de programação </li>
                  <li> API </li>
                  <li> Google </li>

              </td>
              <td>
                  <li> Frameworks </li>
                  <li> Microsoft Office </li>
                  <li> Ciência de dados </li>
              </td>

            </div>

            <div className="softskills">
              <h1> SoftSkills </h1>
              
              <td>
                <li>Criatividade</li>
                <li>Facilidade em aprendizado</li>
                <li>Flexibilidade</li> 
              </td>

              <td>
                <li>Organização</li>
                <li>Motivação</li>
                <li>Trabalho em equipe</li>
              </td>
            </div>

            </div>
            <div className="perfilrigth">
              <div className="experiencias">
                
                <h1>Experiências</h1>

                <ul className="boxExp">
                  <li> Assistente administrativo, 2022/2023, PoloFilms </li>
                  <li> Estagiário em Logística, 2021/2022, PoloFilms </li>
                  <li> Operador de caixa, 2020/2021, Asun Supermercados </li>
                  <li> Desossador, 2019/2021, Agrosul AVES </li>
                  <li> Garçonete, 2019/2019, Mallman Lanches</li>
                  <li> Auxiliar de inspeção, 2016/2018, JBS AVES</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="hobiesinteresses">
              <h1>Hobbies e Interesses</h1>
              <span className="material-symbols-outlined">pin_drop</span>
              <span className="material-symbols-outlined">directions_run</span>
              <span className="material-symbols-outlined">headphones</span>
              <span className="material-symbols-outlined">photo_camera</span>
              <span className="material-symbols-outlined">two_wheeler</span>
              <span className="material-symbols-outlined">cooking</span>
          </div>

        </div>

        <footer>
          Desenvolvido por: Andressa da Silva Rodrigues
        </footer>
      </div>
    </main>
  )
}

export default App
