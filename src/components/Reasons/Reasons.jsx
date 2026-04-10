import { Laptop, TrendingUp, Users, Activity, Code, Target } from 'lucide-react';
import './Reasons.css';

const reasonsList = [
  {
    icon: <Code size={24} />,
    title: 'Desenvolvimento Real',
    description: 'Trabalhe com desafios e demandas reais de empresas parceiras, criando software que será de fato utilizado no mercado.'
  },
  {
    icon: <Laptop size={24} />,
    title: 'Tecnologias Atuais',
    description: 'Aprenda e aplique as tecnologias mais modernas e requisitadas pelo mercado atual de tecnologia da informação.'
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Crescimento Profissional',
    description: 'Acelere sua carreira ganhando experiência prática comprovada, destacando-se na busca corporativa.'
  },
  {
    icon: <Users size={24} />,
    title: 'Trabalho em Equipe',
    description: 'Vivencie a dinâmica de um ambiente profissional, com metodologias ágeis e colaboração constante.'
  },
  {
    icon: <Activity size={24} />,
    title: 'Mentoria Exclusiva',
    description: 'Receba acompanhamento de professores e profissionais experientes em todas as etapas do desenvolvimento.'
  },
  {
    icon: <Target size={24} />,
    title: 'Networking Ativo',
    description: 'Construa sua rede de contatos com profissionais, professores e empresas do ecossistema tecnológico.'
  }
];

const Reasons = () => {
  return (
    <section id="por-que" className="reasons">
      <div className="container">
        <div className="reasons-header">
          <h2 className="section-title">Por que fazer parte da FTT?</h2>
          <p className="reasons-subtitle">Não é apenas teoria, é a prática que define o seu futuro no mercado de tecnologia.</p>
        </div>
        
        <div className="reasons-grid">
          {reasonsList.map((reason, index) => (
            <div className="reason-card" key={index}>
              <div className="reason-icon-wrapper">
                {reason.icon}
              </div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-desc">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
