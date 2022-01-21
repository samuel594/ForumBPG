import TopicPreview from "../components/topic-preview";

const Forum = (props) => {
  let forumName = props.title;
  let fixed = props.fixed;

  let topics = [
    {
      title: 'topico2',
      author: 'geefi',
      topicId: 'saj2d2'
    }
  ]
  
  window.scrollTo(0, 0);

  document.title = forumName;
  return (
    <>
      <h3 className="mb-3">{forumName}</h3>
      <section id="fixed-topics">
        <div className="section_title">
          <h4>Fixados</h4>
        </div>
        <div className="section_content p-2">
          { !fixed || fixed.length === 0 ? <h4>Não há tópicos fixados.</h4> : fixed.map((data, i)=>(
            <TopicPreview key={i} data={data} />
          )) }
        </div>
      </section>
      
      <section id="topics" className="mt-4">
        <div className="section_title">
          <h4>Tópicos</h4>
        </div>
        <div className="d-flex justify-content-end border-start border-end p-2">
          <button className="btn btn-danger">
            <span className="me-2">Escrever</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>
          </button>
          </div>
        <div className="section_content p-2">
          { !topics || topics.length === 0 ? <h4>Não há tópicos aqui.</h4> : topics.map((data, i)=>(
            <TopicPreview key={i} data={data} />
          )) }
        </div>
        
      </section>
    </>
  );
};

export default Forum;