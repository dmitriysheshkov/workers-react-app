import './workers.css';
import WorkersItem from '../workers-item/workers-item'

const Workers = ({ data }) => {

  const elements = data.map( item => {

    const {id, propsItem} = item;

    return (
      <WorkersItem key={id} { ...propsItem } />
    )
    
  });

  return (
    <ul className="workers">
      {elements}
    </ul>
  );
}

export default Workers;