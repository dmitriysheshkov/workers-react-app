import './app.css';
import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../filter/filter';
import Workers from '../workers/workers';
import WorkersForm from '../workers-form/workers-form'

const data = [
  {name: 'John F.', salary: 1200, increase: false, id: 1},
  {name: 'Alex S.', salary: 900, increase: true, id: 2},
  {name: 'Carl W.', salary: 300, increase: false, id: 3}
];

const App = () => {
  return (
    <div className="app">

      <Header />

      <div className="search-filter-panel">
        <SearchPanel />
        <Filter />
      </div>

      <Workers data={ data }/>
      <WorkersForm />
    </div>
  );
}

export default App;
