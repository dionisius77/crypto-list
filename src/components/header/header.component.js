import "./header.style.scss";

const Header = () => {
  return (
    <div className="header">
      <h2>CryptoTracker Pro</h2>
      <img className="profile-picture" src="https://source.unsplash.com/random/400x500" alt="profile-user"/>
    </div>
  )
}

export default Header;