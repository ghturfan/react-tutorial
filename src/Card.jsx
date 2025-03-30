import trialLogoSrc from "./assets/trialLogo.png";

function Card() {
  return (
    <div className="card">
      <img className ="card-image"
       src={trialLogoSrc}
       alt="Trial Logo"
       style={{width:'150px', height: 'auto'}} />
      <h2 className="card-title">Family Daily AI</h2>
      <p className="card-text">MVP Application</p>
    </div>
  );
}
export default Card;
