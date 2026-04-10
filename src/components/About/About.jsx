import './About.css';
import fttLogo from '../../assets/figma/imgSimboloFtt.svg';

const About = () => {
  return (
    <section id="sobre" className="about">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title">Sobre a Fábrica de Tecnologias Turing</h2>
          <p className="about-text">
            É uma fábrica-escola de software da Universidade Evangélica de Goiás (UniEVANGÉLICA).
            Desenvolvendo soluções tecnológicas sob medida para empresas e instituições, unindo inovação e qualidade.
          </p>
        </div>
        <div className="about-logo-container">
          <img src={fttLogo} alt="Símbolo FTT" className="about-logo-img" />
        </div>
      </div>
    </section>
  );
};

export default About;
