import './style.scss';

export default function SocialButtons() {
  return (
    <div className="sns-btns flex space-x-4">
      <a href="#" className="sns-btn">
        <span className="icon">
          <i className="fab fa-discord text-white text-2xl"> </i>
        </span>
      </a>
      <a href="#" className="sns-btn">
        <span className="icon">
          <i className="fab fa-instagram text-white text-2xl"> </i>
        </span>
      </a>
      <a href="#" className="sns-btn">
        <span className="icon">
          <i className="fab fa-twitter text-white text-2xl"> </i>
        </span>
      </a>
      <a href="#" className="sns-btn">
        <span className="icon">
          <i className="fab fa-facebook-f text-white text-2xl"> </i>
        </span>
      </a>
    </div>
  );
}
