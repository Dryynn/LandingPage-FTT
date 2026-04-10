import './Process.css';
import img1st from '../../assets/figma/img1st.png';
import imgCircled4 from '../../assets/figma/imgCircled4.png';
import imgCircled5 from '../../assets/figma/imgCircled5.png';

const steps = [
  {
    image: img1st,
    title: 'Inscrição',
    description: 'Realize a sua inscrição através do site oficial.'
  },
  {
    image: imgCircled4,
    title: 'Avaliação Prática',
    description: 'Participe das provas de proficiência para avaliarmos suas habilidades.'
  },
  {
    image: imgCircled5,
    title: 'Entrevista',
    description: 'Realize sua entrevista com a coordenação da FTT.'
  }
];

const Process = () => {
  return (
    <section className="process">
      <div className="container">
        <div className="process-header">
          <h2 className="section-title">Como posso participar?</h2>
          <p className="process-subtitle">O processo seletivo é desenhado para identificar seu potencial e vontade de aprender.</p>
        </div>
        
        <div className="process-steps">
          <div className="process-line"></div>
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="step-number-img-container">
                <img src={step.image} alt={step.title} className="step-number-img" />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
