import './CTA.css';

const CTA = () => {
  return (
    <section className="cta" id="inscreva-se">
      <div className="container">
        <div className="cta-box glass-panel">
          <div className="cta-content">
            <h2 className="cta-title">Oportunidades Únicas na FTT</h2>
            <p className="cta-text">
              A Fábrica de Software FTT (Fábrica de Tecnologias Turing) oferece
              oportunidades únicas de aprendizado e crescimento. Cada projeto é
              um desafio constante para desenvolver o pensamento crítico e a inovação,
              preparando os participantes para se tornarem profissionais completos
              e prontos para o mercado.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary" style={{ minWidth: '200px' }}>Conheça Nossa Equipe</button>
              <button className="btn btn-primary" style={{ minWidth: '200px', backgroundColor: '#8a0f14' }}>Proponha um Projeto</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
