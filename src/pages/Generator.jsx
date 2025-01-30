import { Container } from 'react-bootstrap';

const Generator = () => {
  return (
    <Container className="generator-container">
      <header className="text-center py-4">
        {/* <h1>Random Media Generator</h1> */}
        <h1>Press a button, and find something to watch:</h1>
      </header>

      <div className="generator-frame">
        <iframe 
          src="https://ad-archer.github.io/MoviesNoir-Movie-Generator/" 
          // src='http://127.0.0.1:5500/index.html' used for development
          title="Movie Generator"
          className="generator-iframe"
        />
      </div>

      <div className="info-section">
        {/* <p className="info-bubble">
          This generator .
        </p> */}
        {/* <a 
          href="https://ad-archer.github.io/MoviesNoir-Movie-Generator/" 
          className="custom-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Generator
        </a> */}
      </div>
    </Container>
  );
};

export default Generator; 