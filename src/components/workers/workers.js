import './workers.css';
import WorkersItem from '../workers-item/workers-item'

const Workers = ({ data }) => {

  const elements = data.map( item => {

    return (
      <WorkersItem { ...item } />
    )
    
  });

  return (
    <ul className="workers">
      {elements}
    </ul>
  );
}

export default Workers;