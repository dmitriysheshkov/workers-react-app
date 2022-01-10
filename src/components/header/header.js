import './header.css';

function Header() {
  return (
    <div className="header">
        <h1 className="header__title">Учёт сотрудников компании</h1>
        <p className="header__total-workers">Общее число сотрудников: </p>
        <p className="header__the-best-workers">Премию получат: </p>
    </div>
  );
}

export default Header;