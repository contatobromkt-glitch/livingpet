// Mockups de celular recriando as telas reais do app LivingPet.
// Feitos em HTML/CSS para ficarem nítidos e fiéis à identidade.
const A = import.meta.env.BASE_URL; // respeita o base do GitHub Pages

export function PhoneMenu() {
  return (
    <div className="phone">
      <div className="screen screen-ludico">
        <div className="sc-pad">
          <div className="mini-logo"><span className="lv">Living</span><span className="pt">Pet</span></div>
          <div className="mini-hero">
            <div className="mini-hero-img">
              <img src={A + 'img/pet-menu.png'} alt="Pet no menu do app" />
            </div>
            <div className="mini-party">
              {[['Passeio', true], ['Comida', true], ['Água', false], ['Brincar', false], ['Higiene', false]].map(([t, ok], i) => (
                <div key={i} className={'party-row' + (ok ? ' ok' : '')}>
                  <div className={'dot' + (ok ? ' ok' : '')} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mini-bars">
            {[['Consistência', 7], ['Energia', 6], ['Cuidado diário', 9]].map(([l, n], i) => (
              <div key={i}>
                <div className="bar-lbl"><span>{l}</span><b>{n * 10}%</b></div>
                <div className="bar-track">
                  {Array.from({ length: 10 }).map((_, k) => <div key={k} className={'seg' + (k < n ? ' on' : '')} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mini-nav">
          <span>Início</span><span>Diário</span>
          <div className="mais">+</div>
          <span>Clínico</span><span>Ajustes</span>
        </div>
      </div>
    </div>
  );
}

export function PhoneAtividades() {
  const itens = [
    ['Passeio matinal', '30 min', 'feito'],
    ['Café da manhã', 'Servir 1x', 'feito'],
    ['Água fresca', 'Trocar 2x', 'foco'],
    ['Brincadeira', '15 min', ''],
    ['Treino curto', '10 min', ''],
  ];
  return (
    <div className="phone">
      <div className="screen screen-ludico">
        <div className="sc-pad">
          <div className="di-bubble">Fase 3 de 5: Água fresca 💧</div>
          <div className="di-title">Rotina de Hoje</div>
          {itens.map(([t, m, st], i) => (
            <div key={i} className={'di-item ' + st}>
              {st === 'foco' && <div className="di-tag">FASE ATUAL</div>}
              <div className="lin">
                <div className={'dot' + (st === 'feito' ? ' ok' : '')} />
                <div>
                  <div className="tt">{t}</div>
                  <div className="mt">{m}</div>
                </div>
              </div>
              {st === 'foco' && <div className="di-btn">Trocar a água</div>}
            </div>
          ))}
        </div>
        <div className="mini-nav">
          <span>Início</span><span>Diário</span>
          <div className="mais">+</div>
          <span>Clínico</span><span>Ajustes</span>
        </div>
      </div>
    </div>
  );
}

export function PhoneFicha() {
  return (
    <div className="phone">
      <div className="screen screen-clinico">
        <div className="sc-pad" style={{ paddingTop: 32 }}>
          <div className="fc-head">
            <div className="fc-avatar"><img src={A + 'img/pet-menu.png'} alt="Foto do pet" /></div>
            <div>
              <div className="fc-nome">Thor</div>
              <div className="fc-meta">Golden Retriever · 2 anos</div>
            </div>
          </div>
          <div className="fc-tabs">
            <div className="fc-tab on">Vacinas</div>
            <div className="fc-tab">Exames</div>
            <div className="fc-tab">Histórico</div>
          </div>
          <div className="fc-card"><div className="t">V10 (Déctupla)</div><div className="m">Próxima dose: 12/09/2026</div></div>
          <div className="fc-card"><div className="t">Antirrábica</div><div className="m">Aplicada em 20/03/2026</div></div>
          <div className="fc-card"><div className="t">Giárdia</div><div className="m">Próxima dose: 05/10/2026</div></div>
          <div className="fc-share">Compartilhar com veterinário</div>
        </div>
        <div className="mini-nav claro">
          <span>Início</span><span>Diário</span>
          <div className="mais">+</div>
          <span>Clínico</span><span>Ajustes</span>
        </div>
      </div>
    </div>
  );
}
