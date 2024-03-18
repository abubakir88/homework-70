import "./Header.scss";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">
              <img src="logo.png" alt="aaa" />
            </a>
            <div className="nav-items">
              <a href="">Home</a>
              <a href="">Shop</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </div>
            <div className="nav-btns">
              <a href="">
                <img src="nav-btn-1.svg" alt="nav-btn" />
              </a>
              <a href="">
                <img src="nav-btn-2.svg" alt="nav-btn" />
              </a>
              <a href="">
                <img src="nav-btn-3.svg" alt="nav-btn" />
              </a>
              <a href="">
                <img src="nav-btn-4.svg" alt="nav-btn" />
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
