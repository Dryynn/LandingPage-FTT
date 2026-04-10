import imgGetQuote from '../../assets/figma/imgGetQuote.png';
import imgName from '../../assets/figma/imgName.png';
import imgDep2 from '../../assets/figma/imgDep2.svg';
import './Impact.css';

const testimonials = [
  {
    quote: "“A gente chegou meio perdido, com uma ideia solta… e eles ajudaram a transformar em algo real. Hoje o sistema tá rodando e facilitando muito nossa rotina.”",
    avatar: imgName,
    role: "Cliente parceiro"
  },
  {
    quote: "“O que mais gostei foi que eles explicam tudo sem complicar. Não fica aquele tanto de termo técnico que ninguém entende.”",
    avatar: imgName,
    role: "Cliente parceiro"
  },
  {
    quote: "“O sistema ficou leve, rápido e fácil de usar. Até quem não tem muita intimidade com tecnologia conseguiu usar sem dificuldade.”",
    avatar: imgName,
    role: "Gestor de Operações"
  }
];

const Impact = () => {
  return (
    <section className="impact">
      <div className="container">
        <div className="impact-header">
          <h2 className="section-title">O impacto do nosso trabalho</h2>
        </div>
        
        <div className="impact-grid">
          {testimonials.map((item, index) => (
            <div className="impact-card" key={index}>
              <div className="quote-icon-container">
                <img src={imgGetQuote} alt="Quote" className="quote-icon" />
              </div>
              <p className="impact-desc">{item.quote}</p>
              
              <div className="impact-author">
                <img src={item.avatar} alt="Avatar" className="author-avatar" />
                <span className="author-role">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
