import { Container, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faEnvelope, 
  faMessage, 
  faPaperPlane,
  faPhone,
  faLocationDot,
  faClock
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => { // note that this is a contact page for the website so you need to use emailjs
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      alert('Message sent successfully!');
      resetForm();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <Container className="contact-container">
      <header className="text-center py-4">
        <h1>Contact Us</h1>
        <p>Have questions? or Updates? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </header>

      <Row className="contact-content">
        <Col lg={4} className="contact-info">
          <div className="info-card">
            <div className="info-item">
              <FontAwesomeIcon icon={faLocationDot} className="info-icon" />
              <h3>Location</h3>
              <p>Philadelphia, PA</p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
              <h3>Github</h3>
              <p><a href="https://github.com/AD-Archer/MoviesNoir">Link To Repo</a></p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faClock} className="info-icon" />
              <h3>Response Time</h3>
              <p>Within 24-48 hours</p>
            </div>
          </div>
        </Col>

        <Col lg={8}>
          <div className="contact-form-wrapper">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="contact-form">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      <FontAwesomeIcon icon={faUser} className="me-2" />
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      <FontAwesomeIcon icon={faMessage} className="me-2" />
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      className="form-control"
                      rows={4}
                      placeholder="Your message"
                    />
                    <ErrorMessage name="message" component="div" className="text-danger" />
                  </div>

                  <button
                    type="submit"
                    className="btn"
                    disabled={isSubmitting}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact; 