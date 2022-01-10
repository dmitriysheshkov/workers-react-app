import './workers-form.css';

const WorkersForm = () => {
  return (
    <section className="workers-form">
      <h3 className="workers-form__title">Добавьте нового сотрудника</h3>
      <form className="workers-form__form">
        <ul className="workers-form__list">
          <li className="workers-form__item">
            <input type="text" className="workers-form__input" placeholder="Имя работника"/>
          </li>
          <li className="workers-add-form__item">
            <input type="text" className="workers-form__input" placeholder="З/п в $"/>
          </li>
        </ul>
        <button className="workers-form__button" type="submit">Добавить</button>
      </form>
    </section>
  );
}

export default WorkersForm;