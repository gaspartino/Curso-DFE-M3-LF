import './App.css';
import Header from './containers/header/tittle'
import ListAut from './containers/section/listMenu';

const App = () => {
  const tittle : string = process.env.REACT_APP_APP_TITTLE as string;

  return (
    <div className= 'App'>
      <Header tittle= {tittle}/>
      <ListAut/>
    </div>
  );
}

export default App;