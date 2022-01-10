import './workers-item.css';

const WorkersItem = () => {
  return (
    <li className="workers__item">
        <p className="workers__name">John Smith</p>
        <input className="workers__input" type="text" defaultValue="1000$" />
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
}

export default WorkersItem;