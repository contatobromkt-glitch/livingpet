import { useEffect, useState } from 'react';
import {
  IconSparkle, IconSyringe, IconCamera, IconShare, IconShield, IconBell,
  IconClock, IconHeart, IconMap, IconCheck,
} from './components/Icons.jsx';
import { PhoneMenu, PhoneAtividades, PhoneFicha } from './components/Phones.jsx';

const A = import.meta.env.BASE_URL; // base do GitHub Pages

// Supabase (chave publishable, pública por design; protegida por RLS)
const SUPA_URL = 'https://rriyytswnfkorjiwownw.supabase.co';
const SUPA_KEY = 'sb_publishable_Az9_SLbQ2pTjNvEKe4Tfzg_GI6terPQ';

// Estreia: 11 de outubro de 2026, 16h (horário de Brasília)
const ALVO = new Date('2026-10-11T16:00:00-03:00').getTime();

function Logo({ className }) {
  return <img className={'logo-img ' + (className || '')} src={A + 'img/logo.png'} alt="LivingPet" />;
}

function Countdown() {
  const [t, setT] = useState(ALVO - Date.now());
  useEffect(() => {
    const id = setInterval(() => setT(ALVO - Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const s = Math.max(0, Math.floor(t / 1000));
  const dias = Math.floor(s / 86400);
  const horas = Math.floor((s % 86400) / 3600);
  const min = Math.floor((s % 3600) / 60);
  const seg = s % 60;
  const pad = (n) => String(n).padStart(2, '0');
  const blocos = [[dias, 'Dias'], [horas, 'Horas'], [min, 'Min'], [seg, 'Seg']];
  return (
    <div className="countdown" aria-label="Contagem regressiva para o lançamento">
      {blocos.map(([v, l], i) => (
        <div key={l} style={{ display: 'flex' }}>
          <div className="cd-box glass-dark">
            <div className="cd-num">{pad(v)}</div>
            <div className="cd-lbl">{l}</div>
          </div>
          {i < 3 && <div className="cd-sep">:</div>}
        </div>
      ))}
    </div>
  );
}

function Waitlist() {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '' });
  const [estado, setEstado] = useState('idle'); // idle | enviando | ok | erro
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function enviar(e) {
    e.preventDefault();
    if (!form.nome || !form.telefone || !form.email) return;
    setEstado('enviando');
    try {
      const res = await fetch(`${SUPA_URL}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          apikey: SUPA_KEY,
          Authorization: `Bearer ${SUPA_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify(form),
      });
      setEstado(res.ok ? 'ok' : 'erro');
    } catch {
      setEstado('erro');
    }
  }

  if (estado === 'ok') {
    return (
      <div className="wait-sucesso">
        <div className="big"><IconCheck width={30} height={30} /></div>
        <h3>Você está na lista!</h3>
        <p>No dia 11 de outubro você recebe o acesso fundador por e-mail. Fique de olho na caixa de entrada.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={enviar}>
      <div className="campo">
        <label htmlFor="nome">Nome</label>
        <input id="nome" type="text" autoComplete="name" placeholder="Seu nome" value={form.nome} onChange={set('nome')} required />
      </div>
      <div className="campo">
        <label htmlFor="tel">Telefone</label>
        <input id="tel" type="tel" autoComplete="tel" placeholder="(27) 90000 0000" value={form.telefone} onChange={set('telefone')} required />
      </div>
      <div className="campo">
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" autoComplete="email" placeholder="voce@email.com" value={form.email} onChange={set('email')} required />
      </div>
      <button className="btn btn-primary btn-bloco" type="submit" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? 'Enviando...' : 'Quero o acesso fundador'}
      </button>
      {estado === 'erro' && <p className="form-msg form-erro">Não deu para enviar agora. Tente novamente em instantes.</p>}
      <p className="form-msg" style={{ color: 'var(--tinta-2)', fontWeight: 600 }}>
        Sem spam. Usamos seus dados apenas para liberar o acesso fundador.
      </p>
    </form>
  );
}

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
            <a href="#lista">Lista de espera</a>
          </nav>
          <a className="btn btn-primary" href="#lista">Entrar na lista</a>
        </div>
      </header>

      {/* ===== Hero em vídeo ===== */}
      <section className="hero">
        <video className="hero-video" src={A + 'img/comercial.webm'} autoPlay muted loop playsInline />
        <div className="hero-scrim" />
        <div className="container hero-in">
          <span className="selo">Estreia 11 de outubro · Acesso fundador</span>
          <h1>Tudo para a <span className="grifo">rotina</span> e a saúde do seu pet, todo dia</h1>
          <p className="lead">
            Rotina diária personalizada por IA, carteira de vacinação, foto do dia e compartilhamento
            com o veterinário. Cão ou gato, tudo em um só app.
          </p>
          <div className="hero-acoes">
            <a className="btn btn-primary" href="#lista">Entrar na lista de espera</a>
            <a className="btn btn-glass" href="#app">Ver o app</a>
          </div>
          <Countdown />
          <p className="hero-data">Lançamento em 11 de outubro de 2026, às 16h.</p>
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
              { ic: <IconShare />, cls: 'ic-roxo', t: 'Compartilhar com o vet', d: 'Envie o histórico ao veterinário com prazo definido e revogue quando quiser.' },
            ].map((c, i) => (
              <div className="card glass" key={i}>
                <div className={'ic-box ' + c.cls}>{c.ic}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Confiança ===== */}
      <section className="secao">
        <div className="container confianca-grid">
          <div>
            <span className="eyebrow">Confiança</span>
            <h2 className="titulo-secao">Feito para a família toda cuidar junto</h2>
            <p className="sub-secao" style={{ margin: '14px 0 0' }}>
              Simples para o dia a dia, sério onde importa. O LivingPet organiza e lembra.
              As decisões clínicas continuam com o seu veterinário.
            </p>
            <div className="mini-lista">
              {[
                { ic: <IconClock width={22} height={22} />, t: 'Hábito diário', d: 'Streak e fases que viram rotina de verdade.' },
                { ic: <IconShield width={22} height={22} />, t: 'Dados protegidos', d: 'Seus dados são seus. Exporte ou exclua quando quiser.' },
                { ic: <IconMap width={22} height={22} />, t: 'Serviços por perto', d: 'Clínicas e pet shops do seu bairro no mapa.' },
                { ic: <IconHeart width={22} height={22} />, t: 'Sem culpa', d: 'A gente incentiva, nunca cobra. Cuidar é leve.' },
              ].map((m, i) => (
                <div className="mini glass" key={i}>
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
          </div>
        </div>
      </section>

      {/* ===== App showcase (mockups 3D) ===== */}
      <section className="secao" id="app">
        <div className="container">
          <div className="centro">
            <span className="eyebrow">O app por dentro</span>
            <h2 className="titulo-secao">Bonito de usar, todo dia</h2>
            <p className="sub-secao">Do menu principal à ficha clínica, uma experiência pensada para criar hábito.</p>
          </div>
          <div className="mockups">
            {[
              { comp: <PhoneMenu />, t: 'Menu principal', d: 'Seu pet em destaque, com a rotina do dia e o progresso à vista.' },
              { comp: <PhoneAtividades />, t: 'Atividades', d: 'A rotina vira um jogo de fases. Cumpra e veja o pet ganhar energia.' },
              { comp: <PhoneFicha />, t: 'Ficha do pet', d: 'Vacinas, exames e histórico organizados, prontos para o veterinário.' },
            ].map((m, i) => (
              <div className="mockup" key={i}>
                {m.comp}
                <div className="cap-t">{m.t}</div>
                <p className="cap">{m.d}</p>
              </div>
            ))}
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
              <div className="passo glass" key={i}>
                <div className="n">{p.n}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Lista de espera ===== */}
      <section className="secao wait" id="lista">
        <div className="container">
          <div className="wait-card glass">
            <div>
              <span className="eyebrow">Acesso fundador</span>
              <h2>Entre na lista e estreie com a gente</h2>
              <p className="sub">
                No lançamento, dia 11 de outubro, quem está na lista recebe o acesso fundador
                do LivingPet em primeira mão.
              </p>
              <ul className="wait-beneficios">
                <li><span className="ck"><IconCheck width={16} height={16} /></span> Acesso antecipado no dia da estreia</li>
                <li><span className="ck"><IconCheck width={16} height={16} /></span> Selo de tutor fundador no app</li>
                <li><span className="ck"><IconCheck width={16} height={16} /></span> Prioridade no suporte e nas novidades</li>
              </ul>
            </div>
            <Waitlist />
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Logo />
              <p className="desc">O app que organiza a rotina e a saúde do seu pet, com carinho, do jeito da sua família.</p>
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
                <li><a href="#lista">Lista de espera</a></li>
                <li><a href="mailto:contato.bromkt@gmail.com">Fale conosco</a></li>
                <li><a href="#lista">Privacidade (LGPD)</a></li>
              </ul>
            </div>
            <div>
              <h5>Contato</h5>
              <ul>
                <li><a href="mailto:contato.bromkt@gmail.com">contato.bromkt@gmail.com</a></li>
                <li><a href="#lista">Instagram</a></li>
                <li><a href="#lista">WhatsApp</a></li>
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
