import { Container } from 'react-bootstrap';

const Generator = () => {
  return (
    <Container className="generator-container">
      <header className="text-center py-4">
        <h1>Random Media Generator</h1>
        <p>Press a button, and find something to watch:</p>
      </header>

      <div className="generator-frame">
        <iframe 
          src="https://ad-archer.github.io/MoviesNoir-Movie-Generator/" 
          title="Movie Generator"
          className="generator-iframe"
        />
      </div>

      <div className="info-section">
        <p className="info-bubble">
          Here is some additional information about the embedded content.
        </p>
        <a 
          href="https://ad-archer.github.io/MoviesNoir-Movie-Generator/" 
          className="custom-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Generator
        </a>
      </div>
    </Container>
  );
};

export default Generator; 