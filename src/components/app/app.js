import './app.css';
import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../filter/filter';
import Workers from '../workers/workers';
import WorkersForm from '../workers-form/workers-form'

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="search-filter-panel">
        <SearchPanel />
        <Filter />
      </div>

      <Workers />
      <WorkersForm />

    </div>
  );
}

export default App;
