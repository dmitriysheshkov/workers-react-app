import './App.css';

const Header = () => {
  return <h1 className="app__header">Приложение</h1>;
}

const Field = function() {
  const holder = 'Введите текст';
  return <input placeholder={holder} type="text" />
};

function Btn() {
  const text = () => { return 'Send' };
  return <button>{ text() }</button>
}

function App() {
  return (
    <div className="app">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export default App;
