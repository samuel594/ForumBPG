import '../css/team.css';

const Team = () => {
  window.scrollTo(0, 0);

  document.title = 'Brasil Play Games - Equipe';
  return (
    <>
      <h4 className="text-center">Fundadores</h4>
      <div className="d-flex justify-content-around w-75 h-25 m-auto ">
        <div className="d-inline-block bg-light border p-2" style={{ width: '212px', height: '345px' }}>
          <div style={{ height: 'calc(100% - 30px)' }}></div>
          <div className="text-center" style={{ height: '30px' }}><h4>Rodrigo_Vilhena</h4></div>
        </div>
        <div className="d-inline-block bg-light border p-2" style={{ width: '212px', height: '345px' }}>
          <div style={{ height: 'calc(100% - 30px)' }}></div>
          <div className="text-center" style={{ height: '30px' }}><h4>Bruno_Vilhena</h4></div>
        </div>
      </div>
    </>
  );
};

export default Team;