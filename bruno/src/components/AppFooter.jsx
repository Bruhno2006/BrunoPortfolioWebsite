import { Bold, Mail, MapPin, Phone } from 'lucide-react';
import './style/AppFooter.css'

function AppFooter() {
  return (
    <footer>
      <div className="footer-main-grid">
        <div className="footer-brand">
          <span>Bruno Amadi</span>
        </div>
        <div className="footer-contacts">
          <h4>Contact Information</h4>
          <div className="footer-contact-links">
            {[
              { icon: <Mail size={16} stroke="black" />, text: "businessemail@hotmail.com" },
              { icon: <Phone size={16} stroke="black" />, text: "(+44)1234567890" },
            ].map(({ icon, text }, i) => {
              return (
                <div key={i} className="footer-contact-link">
                  <span className="footer-contact-link-icon">{icon}</span>
                  <span className="footer-contact-link-name">{text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer-feedback">
          <h4>Feedback</h4>
          <form onSubmit={e => e.preventDefault()} className="footer-feedback-form">
            <input type="email" placeholder="Your email address" className="footer-feedback-form-cards" />
            <textarea placeholder="Share your thoughts..." className="footer-feedback-form-cards" />
            <button type="submit" className="footer-feedback-form-submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter;