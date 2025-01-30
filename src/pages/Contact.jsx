import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <Container className="contact-container">
      <header className="text-center py-4">
        <h1>Contact Us</h1>
        <p>Have questions? We'd love to hear from you.</p>
      </header>

      <div className="contact-form-wrapper">
        <Form onSubmit={handleSubmit} className="contact-form">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message" required />
          </Form.Group>

          <Button className="custom-button" type="submit">
            Send Message
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Contact; 