import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  const teamMembers = [
    {
      name: "Antonio Archer",
      role: "Lead Developer",
      bio: "Full-stack developer with a passion for creating inclusive digital experiences. Specializes in React and modern web technologies, leading the technical development of MoviesNoir.",
      image: "/Images/Creators/archer.avif" // Add actual path to headshot
    },
    {
      name: "Mohamed Souare",
      role: "Content Curator",
      bio: "Film enthusiast and cultural curator with an extensive knowledge of Black cinema. Responsible for curating and maintaining MoviesNoir's diverse media collection.",
      image: "/Images/Creators/mohamed.avif" // Add actual path to headshot
    },
    {
      name: "Nasairah Solomon",
      role: "UI/UX Designer",
      bio: "Creative designer focused on making technology accessible and beautiful. Brings MoviesNoir's vision to life through intuitive and engaging user experiences.",
      image: "/Images/Creators/nasairah.avif" // Add actual path to headshot
    }
  ];

  return (
    <Container className="about-container">
      <header className="text-center py-4">
        <h1>About MoviesNoir</h1>
      </header>
      
      <section className="about-content">
        <div className="info-bubble mission-statement">
          <h2>Our Mission</h2>
          <p>
            MoviesNoir is more than just a platform—it's a celebration of Black cinema and storytelling. 
            We're dedicated to promoting and preserving Black media, making it easier for everyone to discover 
            and appreciate the rich diversity of Black culture through film and television.
          </p>
        </div>
        
        <div className="info-bubble">
          <h2>What We Do</h2>
          <p>
            Through our innovative movie generator and curated content, we help users discover 
            both classic and contemporary Black media. Our platform serves as a bridge between 
            creators and audiences, fostering appreciation for Black storytelling across all genres.
          </p>
        </div>

        <div className="team-section mt-5">
          <h2 className="text-center mb-4">Meet Our Team</h2>
          <Row className="team-members g-4">
            {teamMembers.map((member, index) => (
              <Col key={index} md={4}>
                <div className="team-member-card info-bubble">
                  <div className="member-image">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="rounded-circle mb-3"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h3>{member.name}</h3>
                  <h4 className="role">{member.role}</h4>
                  <p>{member.bio}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="info-bubble mt-5">
          <h2>Join Our Community</h2>
          <p>
            Whether you're a film enthusiast, casual viewer, or someone interested in exploring 
            Black cinema, MoviesNoir welcomes you. Use our movie generator to discover new content, 
            and join us in celebrating the diversity and richness of Black storytelling in media.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default About; 