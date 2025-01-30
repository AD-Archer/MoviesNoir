import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="home-container">
      <header className="text-center py-5">
        <h1>Welcome to Movies Noir</h1>
        <p>A site created by Antonio Archer, Mohamed Souare, and Nasairah Solomon</p>
      </header>

      <div className="banner-container">
        <img 
          src="Images/Website-Material/MoviesNoir-Banner.png" 
          className="banner-image" 
          alt="Movies Noir Banner"
          loading="eager"
        />
      </div>

      <section className="about-section">
        <div className="info-bubble">
          <p>
            Welcome to Moviesnoir, your premier place for entertainment when you don't know what to watch. 
            With the click of a button you can get a recommendation and find something to catch instantly 
            curing both boredom and the lost of culture. We specialize in helping both members inside and 
            outside of the black community find black media. Our team is committed to helping you enjoy 
            yourself and discover culture.
          </p>
        </div>
        <div className="text-center">
          <Button 
            className="custom-button"
            onClick={() => navigate('/generator')}
          >
            Click here to access the random movie generator
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default Home; 