import { Link } from "react-router-dom";

const TopicPreview = (props) => {
  let topic = props.data;

  return (
    <div className="topic-preview d-flex flex-row p-1 ps-3">
      <div className="w-75">
        <Link to={'/t/'+topic.topicId}><h6 className="text-truncate">{topic.title}</h6></Link>
        <small className="d-block text-secondary">{topic.area}</small>
        <small className="text-secondary">por {topic.author}</small>
      </div>
      <div className="v-divider"></div>
      <div className="w-25 ps-1">
        <h6>Geefi</h6>
        <small className="text-secondary">2 minutos atrás</small>
      </div>
    </div>
  );
};

export default TopicPreview;