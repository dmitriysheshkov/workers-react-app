import { Component } from 'react';

import './workers-form.css';

export default class WorkersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { name, salary } = this.state;

    return (
      <section className="workers-form">
        <h3 className="workers-form__title">Добавьте нового сотрудника</h3>
        <form className="workers-form__form">
          <ul className="workers-form__list">
            <li className="workers-form__item">
              <input type="text" className="workers-form__input" 
                placeholder="Имя работника"
                name="name"
                value={name}
                onChange={this.onValueChange} />
            </li>
            <li className="workers-add-form__item">
              <input type="number" className="workers-form__input" 
                placeholder="З/п в $"
                name="salary"
                value={salary}
                onChange={this.onValueChange} />
            </li>
          </ul>
          <button className="workers-form__button" type="submit">Добавить</button>
        </form>
      </section>
    );
  }
}