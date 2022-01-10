import './filter.css';

// TODO: разобраться со ссылками (почему подчёркиваются?)

const Filter = () => {
  return (
    <ul className="filter">
        <li className="filter__item">
            <span className="filter__link filter__link--all" href="#">Все сотрудники</span>
        </li>
        <li className="filter__item">
            <span className="filter__link filter__link__salary--increase" href="#">На повышение</span>
        </li>
        <li className="filter__item">
            <span className="filter__link filter__link--more" href="#">Больше 1000$</span>
        </li>
    </ul>
  );
}

export default Filter;