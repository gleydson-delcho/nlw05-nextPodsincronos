//SPA -> Não será carregada quando desabilitado o javascript.
/* useEffect(() => {
    fetch('http://localhost:3333/episodes')
    .then(res => res.json())
    .then(data => console.log(data))
    },[]) 
  */

//SSR -> As props devem ser passadas como parametro na função que irá receber os dados...
    //Essa função é executada todas as vezes que alguém acessar a página home da aplicação.
  /**
    export async function getServerSideProps() {
    const response = await fetch('http://localhost:3333/episodes');
    const data = await response.json();

    return {
      props: {
        episodes: data,
      }
    }
    }
  */
//SSG -> Versão estática que será servida depois de um primeiro acesso sem fazer novas requisições.
    /** export async function getStaticProps() {
    const response = await fetch('http://localhost:3333/episodes');
    const data = await response.json();

    return {
      props: {
        episodes: data,
      }
    }
    }
  */


export default function Home(props) {

  console.log(props.episodes)
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 12,
  }
}