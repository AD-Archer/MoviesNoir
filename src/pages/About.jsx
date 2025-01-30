import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="about-container">
      <header className="text-center py-4">
        <h1>About Us</h1>
      </header>
      
      <section className="about-content">
        <div className="info-bubble">
          <p>
            MoviesNoir is dedicated to promoting and celebrating black media. Our platform helps users discover 
            movies, shows, and other content that represents and highlights black culture and storytelling.
          </p>
        </div>
        
        <div className="team-section mt-4">
          <h2 className="text-center mb-4">Our Team</h2>
          <div className="team-members">
            <div className="info-bubble">
              <h3>Antonio Archer</h3>
              <p>Lead Developer</p>
            </div>
            <div className="info-bubble">
              <h3>Mohamed Souare</h3>
              <p>Content Curator</p>
            </div>
            <div className="info-bubble">
              <h3>Nasairah Solomon</h3>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About; 