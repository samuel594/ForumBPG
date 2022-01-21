import '../css/profile_configs.css';

var $ = require('jquery');

const Profile = () => {
  let inputDefaultValues = {};
  let inputsOnEditMode = [];

  const editInput = (inputId, triggerBtn) => {
    let input = $('#'+inputId);
    let form = input.closest('form');
    let btns = form.find('button');

    inputDefaultValues[input.attr('name')] = input.val();
    inputsOnEditMode.push(input);

    input.attr('disabled', false);
    input.trigger('focus');
    btns.removeClass('invisible');
    $(triggerBtn).attr('disabled', true);
  };
  const cancelInputEdit = (evt) => {
    let btns = $(evt.target).parent().find('button');
    let warningObrigatory = btns.parent().parent().find('.warning-obrigatory');
    let inputs = btns.closest('form').find('input');

    $.each(inputsOnEditMode, (i, input) => {
      $(input).val(inputDefaultValues[input.attr('name')]);
      $(input).parent().find('button').attr('disabled', false);
    })

    warningObrigatory.addClass('invisible');
    inputs.removeClass('border-danger');
    inputs.attr('disabled', true);
    btns.addClass('invisible');
  };
  const handleInputEntry = (evt) => {
    let input = $(evt.target);
    let warningObrigatory = input.parent().parent().find('.warning-obrigatory');

    console.log(warningObrigatory.html())

    if (input.val() === ''){
      warningObrigatory.removeClass('invisible');
      input.addClass('border-danger');
    } else {
      warningObrigatory.addClass('invisible');
      input.removeClass('border-danger');
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    let form = $(evt.target);
    let inputs = form.find('input');
    let data = {};

    $.each(inputs, (i, input) => {
      console.log(input)
      data[input.name] = input.value;
    })

    console.log(data);
    
  };

  //scroll to top
  window.scrollTo(0, 0);
  return (
    <>
      <section>
        <div className="section_title">
          <h4>Informações da conta</h4>
        </div>
        <div className="section_content p-2">
          <form className="d-flex mt-2 flex-column w-75" action="#" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="in-username" className="fw-bold text-secondary">Nome de Usuário:</label>
              <div className="d-flex flex-row">
                <input id="in-username" name="username" className="d-block w-75 ms-4 border rounded ps-2" 
                style={{height: '35px'}} defaultValue="Geefi_RevenanT" autoComplete="off" disabled
                onInput={handleInputEntry}/>
                <button className="btn btn-danger ms-1 p-0 px-2" style={{height: '35px'}} type="button"
                onClick={evt => editInput('in-username', evt.target)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                  </svg>
                </button>
              </div>
              <small className="warning-obrigatory d-inline-block w-75 text-danger text-end invisible">Este campo é obrigatório</small>
            </div>
            <div className="mt-2">
              <label htmlFor="in-email" className="fw-bold text-secondary">Endereço de email:</label>
              <div className="d-flex flex-row">
                <input id="in-email" name="email" className="d-block w-75 ms-4 border rounded ps-2" 
                style={{height: '35px'}} defaultValue="pirokudo@gmail.com" autoComplete="off" disabled
                onInput={handleInputEntry}/>
                <button className="btn btn-danger ms-1 p-0 px-2" style={{height: '35px'}} type="button"
                onClick={evt => editInput('in-email', evt.target)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                  </svg>
                </button>
              </div>
              <small className="warning-obrigatory d-inline-block w-75 text-danger text-end invisible">Este campo é obrigatório</small>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <button id="btn-save_edit" type="submit" className="btn btn-primary w-25 invisible">
                Salvar edição
              </button>
              <button id="btn-cancel_edit" type="button" className="btn btn-danger w-25 invisible"
              onClick={cancelInputEdit}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="mt-3">
        <div className="section_title">
          <h4>Personalização da conta</h4>
        </div>
        <div className="section_content p-2">
          <form action="#" className="d-flex flex-column w-75">
            <span className="fw-bold text-secondary">Sexo:</span>
            <div className="ms-3">
              <div>
                <input type="radio" id="male" name="sex" value="male"/>
                <label htmlFor="male" className="ms-2">Masculino</label>
              </div>
              <div>
                <input type="radio" id="female" name="sex" value="female" />
                <label htmlFor="female" className="ms-2">Feminino</label>
              </div>
              <div>
                <input type="radio" id="other" name="sex" value="other" />
                <label htmlFor="other" className="ms-2">Prefiro não dizer</label>
              </div>
            </div>
            
            <label htmlFor="in-birthday_date" className="fw-bold text-secondary mt-3">Data de nascimento:</label>
            <input id="in-birthday_date" type="date" className="d-block w-75 ms-4 border rounded ps-2" 
            style={{height: '35px'}} />
            
            <label className="fw-bold text-secondary mt-3">Selecione seu país:</label>
            <select className="d-block w-75 ms-4 border rounded ps-2" style={{height: '35px'}}>
              <option>Brasil</option>
              <option>Portugal</option>
              <option>Angola</option>
              <option>Moçambique</option>
              <option>Uruguai</option>
              <option>Argentina</option>
              <option>Colombia</option>
            </select>
          </form>

          <h5 className="fw-bold text-secondary mt-3">Selecione sua organização no BPG:</h5>
          <button className="d-block btn btn-light fw-bold mt-2" 
          onClick={ (evt) => $(evt.target).next('div').slideToggle(250) }>
            Organizações Neutras
          </button>
          <div style={{display: 'none'}}>
            <ul className="list-style-none py-2">
              <li> 
                <label>
                  <input type="radio" name="profile_field_8_1" value="0" />
                  <img src="https://2img.net/h/www.brasilsamp.com.br/civil.png" alt="Civil" title="Civil" />
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="19" />
                  &nbsp;<img src="https://2img.net/h/www.brasilsamp.com.br/taxista.png" alt="Taxistas" title="Taxistas" />
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="20" />
                  <img src="https://2img.net/h/www.brasilsamp.com.br/mec.png" alt="Mecânicos" title="Mecânicos" />
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="21" />
                  <img src="https://2img.net/h/www.brasilsamp.com.br/reporteres.png" alt="Repórters" title="Repórters" />
                </label>
              </li>
            </ul>
          </div>
          <button className="d-block btn btn-light fw-bold mt-2" 
          onClick={ (evt) => $(evt.target).next('div').slideToggle(250) }>
            Serviço Público
          </button>
          <div style={{display: 'none'}}>
            <ul className="list-style-none py-2">
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="8"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/gov.png" alt="Governo" title="Governo"/>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="9"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/medicos.png" alt="SA:MU" title="SA:MU" />
                </label>
              </li>
            </ul>
          </div>
          <button className="d-block btn btn-light fw-bold mt-2" 
          onClick={ (evt) => $(evt.target).next('div').slideToggle(250) }>
            Oficiais da Jústiça
          </button>
          <div style={{display: 'none'}}>
            <ul className="list-style-none py-2">
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="1"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/pm.png" alt="Policia Militar" title="Policia Militar"/>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="2"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/pc.png" alt="Policia Civil" title="Policia Civil"/>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="3"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/pf.png" alt="Policia Federal" title="Policia Federal"/>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="4"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/bope.png" alt="B.o.p.e" title="B.o.p.e"/>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="5"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/exercito.png" alt="Exécito" title="Exécito"/>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="6"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/interpol.png" alt="Interpol" title="Interpol"/>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="7"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/gate.png" alt="G.a.t.e" title="G.a.t.e"/>
                </label>
              </li>
            </ul>
          </div>
          <button className="d-block btn btn-light fw-bold mt-2" 
          onClick={ (evt) => $(evt.target).next('div').slideToggle(250) }>
            Máfias
          </button>
          <div style={{display: 'none'}}>
            <ul className="list-style-none py-2">
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="10"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/yakuza.png" alt="Máfia Yakuza" title="Máfia Yakuza"/>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="11"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/cn.png" alt="Máfia Cosa Nostra" title="Máfia Cosa Nostra"/>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="12"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/russa.png" alt="Máfia Russa" title="Máfia Russa"/>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="31"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/peaky.png" alt="Máfia Peaky Blinders" title="Máfia Peaky Blinders"/>
                </label>
              </li>
            </ul>
          </div>
          <button className="d-block btn btn-light fw-bold mt-2" 
          onClick={ (evt) => $(evt.target).next('div').slideToggle(250) }>
            Mercenarios
          </button>
          <div style={{display: 'none'}}>
            <ul className="list-style-none py-2">
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="13"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/soa.png" alt="Sons of Anarchy" title="Sons of Anarchy"/>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="14"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/mayans.png" alt="Mayans" title="Mayans"/>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="profile_field_8_1" value="15"/>
                  <img src="https://2img.net/h/www.brasilsamp.com.br/hells.png" alt="Hells Angels" title="Hells Angels"/>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;