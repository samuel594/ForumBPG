
import '../css/home.css';

import categories from '../categories-config'

import Category from '../components/category';

const Home = () => {
  document.title = 'Brasil Play Games - Fórum';

  window.scrollTo(0, 0);
  return (
    <>
      <section id="last-subjects" 
      className="p-2 border rounded-1">
        <h4>Últimos Assuntos</h4>
        <div className="divider"></div>
        <div className="topic d-flex flex-row p-1">
          <div className="w-75">
            <h6>Topico 1</h6>
            <small className="d-block text-secondary">Denuncias</small>
            <small className="text-secondary">por Geefi</small>
          </div>
          <div className="v-divider"></div>
          <div className="w-25 ps-1">
            <h6>Geefi</h6>
            <small className="text-secondary">2 minutos atrás</small>
          </div>
        </div>
        <div className="topic d-flex flex-row p-1">
          <div className="w-75">
            <h6>Topico 1</h6>
            <small className="d-block text-secondary">Denuncias</small>
            <small className="text-secondary">por Geefi</small>
          </div>
          <div className="v-divider"></div>
          <div className="w-25 ps-1">
            <h6>Geefi</h6>
            <small className="text-secondary">2 minutos atrás</small>
          </div>
        </div>
        <div className="topic d-flex flex-row p-1">
          <div className="w-75">
            <h6>Topico 1</h6>
            <small className="d-block text-secondary">Denuncias</small>
            <small className="text-secondary">por Geefi</small>
          </div>
          <div className="v-divider"></div>
          <div className="w-25 ps-1">
            <h6>Geefi</h6>
            <small className="text-secondary">2 minutos atrás</small>
          </div>
        </div>
        <div className="topic d-flex flex-row p-1">
          <div className="w-75">
            <h6>Topico 1</h6>
            <small className="d-block text-secondary">Denuncias</small>
            <small className="text-secondary">por Geefi</small>
          </div>
          <div className="v-divider"></div>
          <div className="w-25 ps-1">
            <h6>Geefi</h6>
            <small className="text-secondary">2 minutos atrás</small>
          </div>
        </div>
        <div className="topic d-flex flex-row p-1">
          <div className="w-75">
            <h6>Topico 1</h6>
            <small className="d-block text-secondary">Denuncias</small>
            <small className="text-secondary">por Geefi</small>
          </div>
          <div className="v-divider"></div>
          <div className="w-25 ps-1">
            <h6>Geefi</h6>
            <small className="text-secondary">2 minutos atrás</small>
          </div>
        </div>
      </section>
      
      { categories.map((section) => (
        <section id={section.id} key={section.id} className="mt-4">
          <div className="section_title">
            <h4>{section.title}</h4>
          </div>
          <div className="section_content">
            { section.categories.map((category, i) => (
              <Category key={i} data={category}/>
            )) }
          </div>
        </section>
        )) }
    </>
  )
};

export default Home;