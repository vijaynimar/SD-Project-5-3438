import './footer.css'
function Footer(){
    return(
       // <!-- Footer -->
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section about">
              <h2>About Us</h2>
              <p>
              Be mindful of what you eat—every bite counts! Track your calories to stay healthy
              and balanced. 🍏🔥
              </p>
            </div>
    
            <div className="footer-section links">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/connect">Connect</a></li>
                <li><a href="/ai-insights">AI Insights</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
    
            <div className="footer-section social">
              <h2>Follow Us</h2>
              <div className="social-icons">
                <a href="javascript:void(0);">
                  <img src="facebook-icon.png" alt="Facebook" />
                </a>
                <a href="javascript:void(0);">
                  <img src="twitter-icon.png" alt="Twitter" />
                </a>
                <a href="javascript:void(0);">
                  <img src="linkedin-icon.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
    
          <div className="footer-bottom">
            &copy; 2025 Calories Counter | All Rights Reserved
          </div>
        </footer>
      );
    }

export default Footer