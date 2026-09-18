import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">

        <div className="hero-content">
          <span className="hero-tag">🌱 Fresh • Direct • Trusted</span>

          <h1>
            🌾 Crop <span>Marketplace</span>
          </h1>

          <h2>
            Best Crop Marketplace for Farmers & Buyers
          </h2>

          <p>
            Buy and sell fresh crops directly from farmers.
            Discover quality agricultural products at fair prices
            and connect with trusted sellers.
          </p>

          <div className="hero-buttons">
            <Link to="/crops" className="primary-btn">
              Explore Crops
            </Link>

            <Link to="/add-crop" className="secondary-btn">
              Add Your Crop
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <h3>500+</h3>
              <p>Crop Listings</p>
            </div>

            <div>
              <h3>250+</h3>
              <p>Farmers</p>
            </div>

            <div>
              <h3>1000+</h3>
              <p>Happy Buyers</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80"
            alt="Agricultural Farm"
          />
        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="how-section">

        <div className="section-heading">
          <span>Simple Process</span>
          <h2>How Crop Marketplace Works?</h2>
          <p>
            Our platform makes buying and selling crops simple,
            transparent and convenient.
          </p>
        </div>

        <div className="steps">

          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon">👨‍🌾</div>
            <h3>Register</h3>
            <p>
              Farmers and buyers create their account and join
              our agricultural marketplace.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon">🌾</div>
            <h3>List Your Crop</h3>
            <p>
              Farmers can add crop details, quantity, price,
              location and crop images.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon">🔍</div>
            <h3>Find Crops</h3>
            <p>
              Buyers can search and explore different crops
              available from farmers.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">04</div>
            <div className="step-icon">🤝</div>
            <h3>Connect</h3>
            <p>
              Buyers can connect directly with farmers and
              discuss their requirements.
            </p>
          </div>

        </div>

      </section>


      {/* ================= POPULAR CROPS ================= */}
      <section className="crops-section">

        <div className="section-heading">
          <span>Fresh From Farms</span>
          <h2>Popular Crops</h2>
          <p>
            Explore some of the crops available on our marketplace.
          </p>
        </div>

        <div className="crop-cards">

          <div className="crop-card">

            <img
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80"
              alt="Wheat"
            />

            <div className="crop-info">
              <span className="crop-category">Cereal</span>

              <h3>🌾 Wheat</h3>

              <p>Fresh quality wheat directly from farmers.</p>

              <div className="crop-bottom">
                <strong>₹2,500 / Quintal</strong>
                <span>📍 Uttar Pradesh</span>
              </div>
            </div>

          </div>


          <div className="crop-card">

            <img
              src="https://images.unsplash.com/photo-1601593768795-8f3b5c1a7c6c?auto=format&fit=crop&w=600&q=80"
              alt="Rice"
            />

            <div className="crop-info">
              <span className="crop-category">Cereal</span>

              <h3>🌾 Rice</h3>

              <p>
                High quality rice available from verified farmers.
              </p>

              <div className="crop-bottom">
                <strong>₹3,200 / Quintal</strong>
                <span>📍 Bihar</span>
              </div>
            </div>

          </div>


          <div className="crop-card">

            <img
              src="https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=600&q=80"
              alt="Corn"
            />

            <div className="crop-info">
              <span className="crop-category">Grain</span>

              <h3>🌽 Corn</h3>

              <p>
                Fresh corn available for wholesale and retail buyers.
              </p>

              <div className="crop-bottom">
                <strong>₹2,100 / Quintal</strong>
                <span>📍 Madhya Pradesh</span>
              </div>
            </div>

          </div>

        </div>

        <div className="view-all">
          <Link to="/crops">
            View All Crops →
          </Link>
        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">

        <div className="why-image">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80"
            alt="Farmer in field"
          />
        </div>

        <div className="why-content">

          <span>Why Us?</span>

          <h2>
            Making Agriculture More Connected
          </h2>

          <p>
            Crop Marketplace is designed to create a simple
            digital platform where farmers can showcase their
            crops and buyers can easily find agricultural products.
          </p>

          <div className="benefits">

            <div className="benefit">
              <div>🌱</div>
              <div>
                <h3>Fresh Crops</h3>
                <p>
                  Discover fresh agricultural products directly
                  from farmers.
                </p>
              </div>
            </div>

            <div className="benefit">
              <div>💰</div>
              <div>
                <h3>Fair Pricing</h3>
                <p>
                  Farmers can list their own prices and buyers
                  can compare available crops.
                </p>
              </div>
            </div>

            <div className="benefit">
              <div>🤝</div>
              <div>
                <h3>Direct Connection</h3>
                <p>
                  Connect farmers and buyers through one platform.
                </p>
              </div>
            </div>

            <div className="benefit">
              <div>🔒</div>
              <div>
                <h3>Easy & Secure</h3>
                <p>
                  Simple registration and user-friendly marketplace.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA SECTION ================= */}
      <section className="cta-section">

        <div className="cta-content">

          <span>🌾 Join Our Marketplace</span>

          <h2>
            Ready to Buy or Sell Crops?
          </h2>

          <p>
            Join Crop Marketplace and become a part of a
            connected agricultural community.
          </p>

          <div className="cta-buttons">

            <Link to="/register" className="cta-primary">
              Create Account
            </Link>

            <Link to="/crops" className="cta-secondary">
              Browse Crops
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;