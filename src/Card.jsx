import trialLogoSrc from './assets/trialLogo.png';
import Button from './Button/Button.jsx'

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src={trialLogoSrc}
        alt="Trial Logo"
        style={{ width: '150px', height: 'auto' }}
      />
      <h2 className="card-title">MVP App AI</h2>
      <p className="card-text">MVP Application</p>
      <Button className="button"></Button>
    </div>
  );
}
export default Card;
