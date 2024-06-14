// Testimonials.js
 

const testimonials = [
  {
    name: 'John Doe',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    comment: 'This task manager has changed my life! I can keep track of everything easily.'
  },
  {
    name: 'Jane Smith',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    comment: 'Fantastic tool! It helps me stay organized and productive.'
  },
  {
    name: 'Mike Johnson',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    comment: 'Highly recommended for anyone managing multiple projects.'
  },
  {
    name: 'Emily Davis',
    photo: 'https://randomuser.me/api/portraits/women/4.jpg',
    comment: 'The best task manager I have ever used!'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-photo-wrapper">
                <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
                <div className="testimonial-overlay">
                  <span className="testimonial-name">{testimonial.name}</span>
                </div>
              </div>
              <p className="testimonial-comment">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
