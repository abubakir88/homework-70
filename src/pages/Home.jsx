import "./pages.scss";
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="card">
          <div className="card-texts">
            <h6>New Arrival</h6>
            <h1>Discover Our New Collection</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button>BUY Now</button>
          </div>
        </div>
      </section>
      <section className="browse">
        <div className="container">
          <div className="title">
            <h1>Browse The Range</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="cards">
            <div className="card">
              <img src="home-card-img.png" alt="card-img" />
              <h3>Dining</h3>
            </div>
            <div className="card">
              <img src="home-card-img-2.png" alt="card-img" />
              <h3>Living</h3>
            </div>
            <div className="card">
              <img src="home-card-img-3.png" alt="card-img" />
              <h3>Bedroom</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
