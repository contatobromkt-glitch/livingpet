import { useState } from 'react';
import {
  IconSparkle, IconSyringe, IconCamera, IconShare, IconShield, IconBell,
  IconClock, IconHeart, IconMap, IconCheck,
} from './components/Icons.jsx';
import { PhoneMenu, PhoneAtividades, PhoneFicha } from './components/Phones.jsx';

const A = import.meta.env.BASE_URL; // base do GitHub Pages

function Logo({ className }) {
  return <img className={'logo-img ' + (className || '')} src={A + 'img/logo.png'} alt="LivingPet" />;
}

// Modal com a Política de Privacidade (LGPD).
function Privacidade({ onFechar }) {
  return (
    <div className="modal-fundo" onClick={onFechar} role="dialog" aria-modal="true" aria-label="Política de Privacidade">
      <div className="modal glass" onClick={(e) => e.stopPropagation()}>
        <div className="modal-topo">
          <h2>Política de Privacidade</h2>
          <button className="modal-x" onClick={onFechar} aria-label="Fechar">×</button>
        </div>
        <div className="modal-corpo">
          <p className="pol-data">Última atualização: 16 de outubro de 2026.</p>

          <h3>1. Quem somos (Controlador)</h3>
          <p>
            O LivingPet é um aplicativo de rotina e cuidado de pets, operado pela Bro Growth.
            Contato do encarregado de dados:
            <a href="mailto:contato.bromkt@gmail.com"> contato.bromkt@gmail.com</a>.
          </p>

          <h3>2. Quais dados coletamos</h3>
          <p>
            Este site <b>não coleta dados pessoais</b>: não tem formulário de cadastro, não usa cookies de
            rastreamento e não faz perfilamento. Você navega de forma anônima.
          </p>

          <h3>3. O aplicativo</h3>
          <p>
            Quando o app LivingPet estiver disponível, o tratamento dos dados dentro dele seguirá a política
            de privacidade própria do aplicativo, apresentada antes do cadastro.
          </p>

          <h3>4. Contato</h3>
          <p>
            Dúvidas sobre privacidade podem ser enviadas para o e-mail acima.
          </p>

          <h3>5. Hospedagem</h3>
          <p>
            O site é hospedado no GitHub Pages, que pode registrar dados técnicos de acesso (como endereço IP)
            para segurança e funcionamento do serviço.
          </p>

          <h3>6. Seus direitos (LGPD)</h3>
          <p>Você pode, a qualquer momento e gratuitamente:</p>
          <ul>
            <li>confirmar a existência e acessar seus dados;</li>
            <li>corrigir dados incompletos ou desatualizados;</li>
            <li>solicitar a exclusão dos seus dados;</li>
            <li>solicitar a portabilidade;</li>
            <li>revogar o consentimento;</li>
            <li>apresentar reclamação à ANPD (Autoridade Nacional de Proteção de Dados).</li>
          </ul>
          <p>
            Para exercer qualquer direito, escreva para
            <a href="mailto:contato.bromkt@gmail.com"> contato.bromkt@gmail.com</a>. Respondemos no menor prazo possível.
          </p>

          <h3>7. Segurança</h3>
          <p>
            Adotamos medidas técnicas para proteger seus dados contra acesso não autorizado, incluindo
            controle de acesso no banco de dados. Ainda assim, nenhum sistema é 100% infalível, e nos
            comprometemos a comunicar incidentes relevantes conforme a lei.
          </p>

          <h3>8. Menores de idade</h3>
          <p>Este site não se destina à coleta de dados de menores de idade sem o consentimento dos responsáveis.</p>

          <h3>9. Alterações</h3>
          <p>
            Podemos atualizar esta política. Mudanças relevantes serão comunicadas nesta página, com nova data de vigência.
          </p>
        </div>
        <div className="modal-rodape">
          <button className="btn btn-primary" onClick={onFechar}>Entendi</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [priv, setPriv] = useState(false);
  return (
    <>
      {priv && <Privacidade onFechar={() => setPriv(false)} />}
      {/* ===== Header ===== */}
      <header className="header">
        <div className="container header-in">
          <Logo />
          <nav className="nav">
            <a href="#recursos">Recursos</a>
            <a href="#app">O app</a>
            <a href="#como">Como funciona</a>
            </nav>
          <a className="btn btn-primary" href="#embreve">Em breve</a>
        </div>
      </header>

      {/* ===== Hero em vídeo ===== */}
      <section className="hero">
        <video className="hero-video" src={A + 'img/comercial.webm'} autoPlay muted loop playsInline />
        <div className="hero-scrim" />
        <div className="container hero-in">
          <span className="selo">Em breve na App Store e no Google Play</span>
          <h1>Tudo para a <span className="grifo">rotina</span> e a saúde do seu pet, todo dia</h1>
          <p className="lead">
            Rotina diária personalizada por IA, carteira de vacinação, foto do dia e compartilhamento
            com o veterinário. Cão ou gato, tudo em um só app.
          </p>
          <div className="hero-acoes">
            <a className="btn btn-primary" href="#app">Ver o app</a>
            <a className="btn btn-glass" href="#recursos">Conhecer os recursos</a>
          </div>
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

      {/* ===== Em breve ===== */}
      <section className="secao wait" id="embreve">
        <div className="container">
          <div className="wait-card glass embreve-card">
            <span className="eyebrow">Em breve</span>
            <h2>O LivingPet está chegando</h2>
            <p className="sub">
              Em breve disponível para iPhone e Android. Siga a gente para saber em primeira mão.
            </p>
            <div className="lojas">
              <div className="loja"><small>Em breve na</small><b>App Store</b></div>
              <div className="loja"><small>Em breve no</small><b>Google Play</b></div>
            </div>
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
                                <li><a href="mailto:contato.bromkt@gmail.com">Fale conosco</a></li>
                <li><button type="button" className="link-footer" onClick={() => setPriv(true)}>Privacidade (LGPD)</button></li>
              </ul>
            </div>
            <div>
              <h5>Contato</h5>
              <ul>
                <li><a href="mailto:contato.bromkt@gmail.com">contato.bromkt@gmail.com</a></li>
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
