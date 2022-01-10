import './workers.css';
import WorkersItem from '../workers-item/workers-item'

const Workers = () => {
  return (
    <ul className="workers">
      <WorkersItem />
      <WorkersItem />
      <WorkersItem />
    </ul>
  );
}

export default Workers;