import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const EsfumadoWaves = () => (
  <svg className="hero-esfumado" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.4">
      <path d="M-100 100 C 300 -100, 600 500, 1540 200" stroke="#620000" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
      <path d="M-100 140 C 300 -60, 600 540, 1540 240" stroke="#620000" strokeWidth="1.5" strokeOpacity="0.25" fill="none" />
      <path d="M-100 180 C 300 -20, 600 580, 1540 280" stroke="#620000" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
      <path d="M-100 220 C 300 20, 600 620, 1540 320" stroke="#620000" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />
      <path d="M-100 260 C 300 60, 600 660, 1540 360" stroke="#620000" strokeWidth="1.5" strokeOpacity="0.1" fill="none" />
      
      <path d="M-100 500 C 400 300, 800 900, 1540 600" stroke="#620000" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
      <path d="M-100 540 C 400 340, 800 940, 1540 640" stroke="#620000" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />
      <path d="M-100 580 C 400 380, 800 980, 1540 680" stroke="#620000" strokeWidth="1.5" strokeOpacity="0.1" fill="none" />
      
      <path d="M-100 800 C 500 500, 1000 1200, 1540 800" stroke="#620000" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />
      <path d="M-100 840 C 500 540, 1000 1240, 1540 840" stroke="#620000" strokeWidth="1.5" strokeOpacity="0.1" fill="none" />
      
      <path d="M-100 800 C 400 1100, 900 100, 1540 500" stroke="#620000" strokeWidth="1" strokeOpacity="0.2" fill="none" />
      <path d="M-100 850 C 400 1150, 900 150, 1540 550" stroke="#620000" strokeWidth="1" strokeOpacity="0.1" fill="none" />
      
      <path d="M 0 0 C 600 800, 1000 400, 1440 900" stroke="#620000" strokeWidth="1" strokeOpacity="0.15" fill="none" />
    </g>
  </svg>
);

const Hero = () => {
  return (
    <section className="hero">
      {/* Native Rendered Topographic Background */}
      <EsfumadoWaves />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">CONECTANDO MENTES BRILHANTES AO MERCADO</div>
          <h1 className="hero-title">
            Onde a Academia <span>Impulsiona</span> a Inovação do Mercado
          </h1>
          <p className="hero-subtitle">
            A Fábrica de Tecnologias Turing é a plataforma que une estudantes talentosos a empresas e organizações.
            Desenvolva projetos reais, ganhe experiência prática e construa seu futuro profissional.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary hero-btn-main" style={{ padding: '0.8rem 2rem' }}>
              Solicitar Projeto
            </button>
            <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', backgroundColor: '#8a0f14' }}>
              Sou Estudante: Buscar Projetos
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="isometric-stack">
            {/* Back layers */}
            <div className="layer layer-3">
              <div className="window-header">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              </div>
            </div>
            <div className="layer layer-2">
              <div className="window-header">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              </div>
            </div>
            {/* Front layer with falling code */}
            <div className="layer layer-1">
              <div className="window-header">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              </div>
              <div className="code-container">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className="code-drop"
                    style={{
                      left: `${i * 4}%`,
                      animationDuration: `${1.5 + (i % 3)}s`,
                      animationDelay: `${(i % 5) * 0.4}s`,
                      opacity: 0.4 + (i % 4) * 0.2
                    }}
                  >
                    {`10101001010111
                     0100101010110
                     10101000101
                     01010100100
                     1101010100
                     01001010`.replace(/\s+/g, '\n')}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
