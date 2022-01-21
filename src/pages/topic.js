import React from "react";
import { Link as ScrollLink } from 'react-scroll';
import { useParams } from "react-router-dom";
import '../css/topic.css';

import TextEditor from '../components/text-editor';
let commentData = {
  author: {
    name: 'Geefi_RevenanT',
    messages: 33,
    age: 17,
    country: 'Brasil'
  },
  message: 'Ohgvuhibbujhoioi',

};

let post = {
  title: 'Regras do servidor',
  message: `Regra 1 sem dm<br>Regra 2 sem antirpg`,
  author: {
    name: 'Geefi_RevenanT',
    messages: 33,
    age: 17,
    country: 'Brasil'
  }
};

const Post = (props) => {
  let data = props.data;

  document.title = `Tópico - ${data.title}`;

  return (
    <>
      <div className="topic_post h-75 d-flex flex-row border rounded">
        <div className="d-flex flex-column border-end pt-2">
          <div className="topic_author-info d-inline-block">
            <div className="w-100 h-50 text-center border-bottom">
              <img src="https://i.imgur.com/ZhT87OL.jpeg" alt="" onError={function(){this.src = 'https://i.imgur.com/ZhT87OL.jpeg'}} />
              <h6 className="pt-2 m-0">Danca_Kuduro</h6>
            </div>
            <div className="w-100 h-50 p-3 bg-white">
              <small>
                Mensagens: {data.author.messages}<br/>
                Idade: {data.author.age}<br/>
                País: {data.author.country}
              </small>
            </div>
          </div>
        </div>
        <div className="topic_content d-flex flex-column p-2">
          <div className="topic_top d-inline-flex flex-column w-100 ">
            <h4 className="text-truncate" title="Topico 1">{data.title}</h4>
            <small className="text-secondary">Postado hoje às 15:40</small>
          </div>
          <pre className="topic_text w-100 m-0 pt-3 px-2 text-wrap text-truncate" 
          dangerouslySetInnerHTML={{__html: post.message}}></pre>
        </div>
      </div>
    </>
  );
};

const Comment = (props) => {
  let data = props.data;

  return (
    <div className="topic_comment h-75 mt-3 d-flex flex-row border rounded">
      <div className="d-flex flex-column border-end pt-2">
        <div className="topic_author-info d-inline-block">
          <div className="w-100 h-50 text-center border-bottom">
            <img src="https://i.imgur.com/ZhT87OL.jpeg" alt="" onError={function(){this.src = 'https://i.imgur.com/ZhT87OL.jpeg'}} />
            <h6 className="pt-2 m-0">Cornin_GTA</h6>
          </div>
          <div className="w-100 h-50 p-3 bg-white">
            <small>
              Mensagens: 22<br/>
              Idade: 17<br/>
              País: Brasil
            </small>
          </div>
        </div>
      </div>
      <div className="topic_content d-flex flex-column p-2">
        <div className="topic_top d-inline-flex flex-column w-100 ">
          <small className="text-secondary">Respondido hoje às 15:40</small>
        </div>
        <div className="topic_text w-auto px-2">
          { data.message }
        </div>
      </div>
    </div>
  );
};

const Topic = () => {
  const { key } = useParams();

  //window.scrollTo(0, 0);
  return (
    <section id="topic">
      <div className="d-flex justify-content-end mb-2">
        <ScrollLink className="btn btn-danger" 
        to="write-comment-area"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
          <span className="me-2">Responder</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-dots" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        </ScrollLink>
      </div>
      <Post data={post} />
      <Comment data={commentData} />
      <div id="write-comment-area" className="w-100 mt-2 p-3 border">
        <h5>Responda ao tópico</h5>
        <TextEditor/>
        <div className="d-flex justify-content-end mt-1">
          <button className="btn btn-danger ">
            Enviar
          </button>
        </div>
        
      </div>
    </section>
  );
}

export default Topic;