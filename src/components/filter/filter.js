import './filter.css';

// TODO: разобраться со ссылками (почему подчёркиваются?)

function Filter() {
  return (
    <ul className="filter">
        <li className="filter__item">
            <a className="filter__link filter__link--all" href="#">Все сотрудники</a>
        </li>
        <li className="filter__item">
            <a className="filter__link filter__link__salary--increase" href="#">На повышение</a>
        </li>
        <li className="filter__item">
            <a className="filter__link filter__link--more" href="#">Больше 1000$</a>
        </li>
    </ul>
  );
}

export default Filter;