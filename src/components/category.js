import { Link } from 'react-router-dom';

const Category = (props) => {
  let category = props.data;

  return (
    <div className="category ps-4 py-1 d-flex flex-row text-truncate text-wrap">
      <div className="w-75 h-100 pt-2">
        <Link to={category.href}><h5>{category.title}</h5></Link>
        <small>{category.description}</small>
        { category.extra.length > 0 ? <><br/><small><b>{ category.extra }</b></small></> : null }
      </div>
      <div className="v-divider"></div>
      <div className="w-25 d-flex align-self-center">
        <div className="w-100 ps-1">
          <h6>Geefi</h6>
          <small className="text-secondary">2 minutos atrás</small>
        </div>
      </div>
      
    </div>
  );
};

export default Category;