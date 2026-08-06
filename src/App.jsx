import { PhoneMenu, PhoneAtividades, PhoneFicha } from './components/Phones.jsx';
import {
  IconSparkle, IconSyringe, IconCamera, IconShare, IconShield, IconBell,
  IconClock, IconHeart, IconMap, IconFile, IconApple, IconAndroid,
} from './components/Icons.jsx';

function Logo({ className }) {
  return (
    <div className={'logo ' + (className || '')}>
      <span className="lv">Living</span><span className="pt">Pet</span>
    </div>
  );
}

const A = import.meta.env.BASE_URL; // base do GitHub Pages

export default function App() {
  return (
    <>
      {/* ===== Header ===== */}
      <header className="header">
        <div className="container header-in">
          <Logo />
          <nav className="nav">
            <a href="#recursos">Recursos</a>
            <a href="#app">O app</a>
            <a href="#como">Como funciona</a>
            <a href="#depoimentos">Depoimentos</a>
          </nav>
          <div className="header-cta">
            <a className="btn btn-primary" href="#baixar">Baixar o app</a>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${A}img/hero.png)` }} />
        <div className="hero-scrim" />
        <div className="container hero-in">
          <span className="eyebrow" style={{ background: 'rgba(255,255,255,.15)', color: '#eafaf1' }}>
            Rotina e saúde do seu pet
          </span>
          <h1>Tudo para a <span className="grifo">rotina</span> e a saúde do seu pet, todo dia</h1>
          <p className="lead">
            Rotina diária personalizada por IA, carteira de vacinação, foto do dia e compartilhamento
            com o veterinário — cão ou gato, tudo em um só app.
          </p>
          <div className="hero-acoes">
            <a className="btn btn-primary" href="#baixar">Baixar o app</a>
            <a className="btn btn-ghost" href="#app">Ver o app</a>
          </div>
          <div className="hero-chips">
            <div className="chip"><span className="ic"><IconSparkle width={20} height={20} /></span>Rotina por IA</div>
            <div className="chip"><span className="ic"><IconShield width={20} height={20} /></span>Carteira de vacinação</div>
            <div className="chip"><span className="ic"><IconBell width={20} height={20} /></span>Lembretes na hora certa</div>
          </div>
        </div>
        <div className="hero-badge">
          <div className="num">10.000+</div>
          <div className="lbl">pets acompanhados<br />com carinho</div>
        </div>
      </section>

      {/* ===== Recursos ===== */}
      <section className="secao" id="recursos">
        <div className="container">
          <div className="centro">
            <span className="eyebrow">Recursos</span>
            <h2 className="titulo-secao">Cuidar ficou simples</h2>
            <p className="sub-secao">Tudo o que a rotina do seu pet precisa, organizado e no seu bolso.</p>
          </div>
          <div className="recursos-grid">
            {[
              { ic: <IconSparkle />, cls: 'ic-verde', t: 'Rotina diária por IA', d: 'Uma rotina feita para o seu pet, cruzando espécie, idade e o dia a dia da sua família.' },
              { ic: <IconSyringe />, cls: 'ic-roxo', t: 'Carteira de vacinação', d: 'Vacinas, doses e lembretes automáticos 7 dias antes e no dia. Nunca mais esqueça.' },
              { ic: <IconCamera />, cls: 'ic-verde', t: 'Foto do dia', d: 'Registre o crescimento do seu pet com um clique. Um diário só seu, privado e seguro.' },
              { ic: <IconShare />, cls: 'ic-roxo', t: 'Compartilhar com o vet', d: 'Envie o histórico ao veterinário com prazo definido — e revogue quando quiser.' },
            ].map((c, i) => (
              <div className="card" key={i}>
                <div className={'ic-box ' + c.cls}>{c.ic}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Confiança ===== */}
      <section className="secao confianca">
        <div className="container confianca-grid">
          <div>
            <span className="eyebrow">Confiança</span>
            <h2 className="titulo-secao">Feito para a família toda cuidar junto</h2>
            <p className="sub-secao" style={{ margin: '14px 0 0' }}>
              Simples para o dia a dia, sério onde importa. O LivingPet organiza e lembra —
              as decisões clínicas continuam com o seu veterinário.
            </p>
            <div className="mini-lista">
              {[
                { ic: <IconClock width={22} height={22} />, t: 'Hábito diário', d: 'Streak e fases que viram rotina de verdade.' },
                { ic: <IconShield width={22} height={22} />, t: 'Dados protegidos', d: 'Seus dados são seus. Exporte ou exclua quando quiser.' },
                { ic: <IconMap width={22} height={22} />, t: 'Serviços por perto', d: 'Clínicas e pet shops do seu bairro no mapa.' },
                { ic: <IconHeart width={22} height={22} />, t: 'Sem culpa', d: 'A gente incentiva, nunca cobra. Cuidar é leve.' },
              ].map((m, i) => (
                <div className="mini" key={i}>
                  <div className="ic">{m.ic}</div>
                  <div><h4>{m.t}</h4><p>{m.d}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="confianca-img">
            <div className="familia-duo">
              <img className="fam fam-a" src={A + 'img/familia.png'} alt="Família usando o LivingPet com seu pet" loading="lazy" />
              <img className="fam fam-b" src={A + 'img/familia-branca.png'} alt="Outra família usando o LivingPet com seu pet" loading="lazy" />
            </div>
            <div className="stat-badge">
              <div className="num">98%</div>
              <div className="lbl">recomendam para<br />outros tutores</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== App showcase ===== */}
      <section className="secao app-showcase" id="app">
        <div className="container">
          <div className="centro">
            <span className="eyebrow">O app por dentro</span>
            <h2 className="titulo-secao">Bonito de usar, todo dia</h2>
            <p className="sub-secao">Do menu principal à ficha clínica: uma experiência pensada para criar hábito.</p>
          </div>
          <div className="phones">
            <div className="phone-wrap">
              <PhoneMenu />
              <div className="phone-cap-t" style={{ marginTop: 22 }}>Menu principal</div>
              <p className="phone-cap">Seu pet em destaque, com a rotina do dia e o progresso à vista.</p>
            </div>
            <div className="phone-wrap">
              <PhoneAtividades />
              <div className="phone-cap-t" style={{ marginTop: 22 }}>Atividades</div>
              <p className="phone-cap">A rotina vira um jogo de fases — cumpra e veja o pet ganhar energia.</p>
            </div>
            <div className="phone-wrap">
              <PhoneFicha />
              <div className="phone-cap-t" style={{ marginTop: 22 }}>Ficha do pet</div>
              <p className="phone-cap">Vacinas, exames e histórico organizados — prontos para o veterinário.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Como funciona ===== */}
      <section className="secao" id="como">
        <div className="container">
          <div className="centro">
            <span className="eyebrow">Como funciona</span>
            <h2 className="titulo-secao">Comece em 3 passos</h2>
          </div>
          <div className="passos">
            {[
              { n: '1', t: 'Cadastre seu pet', d: 'Conte o essencial sobre você e o seu pet. Leva menos de 2 minutos.' },
              { n: '2', t: 'Receba a rotina', d: 'A IA monta a rotina do dia sob medida, respeitando a espécie e o seu tempo.' },
              { n: '3', t: 'Cumpra e acompanhe', d: 'Marque as atividades, tire a foto do dia e veja o hábito crescer.' },
            ].map((p, i) => (
              <div className="passo" key={i}>
                <div className="n">{p.n}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Depoimentos ===== */}
      <section className="secao depoimentos" id="depoimentos">
        <div className="container">
          <div className="centro">
            <span className="eyebrow">Depoimentos</span>
            <h2 className="titulo-secao">Tutores que já cuidam melhor</h2>
          </div>
          <div className="dep-grid">
            {[
              { txt: 'Finalmente parei de esquecer as vacinas da Mel. Os lembretes salvam a minha vida.', n: 'Ana', p: 'tutora da Mel', a: 'A' },
              { txt: 'A rotina por IA entendeu que meu gato não passeia. Ficou a cara da nossa casa.', n: 'Igor', p: 'tutor do Simba', a: 'I' },
              { txt: 'Compartilhei o histórico com a veterinária em segundos. Ela adorou a organização.', n: 'Marina', p: 'tutora do Thor', a: 'M' },
            ].map((d, i) => (
              <div className="dep" key={i}>
                <div className="stars">★★★★★</div>
                <p>“{d.txt}”</p>
                <div className="autor">
                  <div className="av">{d.a}</div>
                  <div><b>{d.n}</b><small>{d.p}</small></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA final ===== */}
      <section className="secao" id="baixar">
        <div className="container">
          <div className="cta">
            <h2>Baixe o LivingPet e comece hoje</h2>
            <p>Grátis para começar. A rotina do seu pet, mais leve e organizada — na palma da mão.</p>
            <div className="cta-lojas">
              <a className="loja" href="#"><IconApple /><span><small>Baixar na</small><b>App Store</b></span></a>
              <a className="loja" href="#"><IconAndroid /><span><small>Disponível no</small><b>Google Play</b></span></a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Logo className="logo" />
              <p className="desc">O app que organiza a rotina e a saúde do seu pet — com carinho, do jeito da sua família.</p>
            </div>
            <div>
              <h5>Produto</h5>
              <ul>
                <li><a href="#recursos">Recursos</a></li>
                <li><a href="#app">O app</a></li>
                <li><a href="#como">Como funciona</a></li>
              </ul>
            </div>
            <div>
              <h5>Suporte</h5>
              <ul>
                <li><a href="#">Central de ajuda</a></li>
                <li><a href="#">Fale conosco</a></li>
                <li><a href="#">Privacidade (LGPD)</a></li>
              </ul>
            </div>
            <div>
              <h5>Contato</h5>
              <ul>
                <li><a href="mailto:contato.bromkt@gmail.com">contato.bromkt@gmail.com</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <p className="disclaimer">
            O LivingPet organiza, lembra e orienta a rotina do seu pet. Ele não substitui a avaliação
            de um médico veterinário. Decisões clínicas são sempre responsabilidade de um profissional habilitado.
          </p>
          <div className="copy">
            <span>© 2026 LivingPet. Todos os direitos reservados.</span>
            <span>Feito com cuidado por Bro Growth.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
