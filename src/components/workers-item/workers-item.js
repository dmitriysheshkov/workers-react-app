import './workers-item.css';

const WorkersItem = ({ name, salary, increase, id }) => {
  return (
    <li className={ increase ? 'workers__item workers__item--increase' : 'workers__item' }>
        <p className="workers__name">{ name }</p>
        <input className="workers__input" type="text" defaultValue={ salary + '$' } />
        <ul className="workers__buttons">
          <li className="workers__button-item">
            <span className="workers__button">Премировать</span>
          </li>
          <li className="workers__button-item">
            <span className="workers__button">Удалить</span>
          </li>
          <li className="workers__button-item">
            <span className="workers__button">Повысить</span>
          </li>
        </ul>
    </li>
  );
};

export default WorkersItem;