import './app.css';
import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../filter/filter';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="search-filter-panel">
        <SearchPanel />
        <Filter />
      </div>

    </div>
  );
}

export default App;
