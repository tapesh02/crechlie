"use client";

import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./HomePage.module.scss";
import Header from "@components/sections/header/Header";

function HomePage() {
  const features = [
    {
      id: 1,
      icon: "⚡",
      title: "Real-Time Availability",
      description: "Book instantly. Our live availability system updates in real time, so you can secure your child's place with total transparency.",
    },
    {
      id: 2,
      icon: "🇮🇪",
      title: "Irish Excellence",
      description: "Proudly Irish and fully compliant with national childcare standards — delivering quality care the local community trusts.",
    },
    {
      id: 3,
      icon: "👨‍🏫",
      title: "Professional Early Educators",
      description: "Our experienced team provides exceptional care and individual attention, ensuring every child's unique potential is nurtured.",
    },
    {
      id: 4,
      icon: "🎨",
      title: "Modern Learning Environment",
      description: "Safe, inspiring spaces designed for exploration, creativity, and early development.",
    },
    {
      id: 5,
      icon: "🥗",
      title: "Healthy Living",
      description: "Fresh, balanced meals crafted to support growing bodies and curious minds.",
    },
    {
      id: 6,
      icon: "😊",
      title: "Growth & Joy",
      description: "Every day balances learning, laughter, and purposeful play — helping your child grow with independence and joy.",
    },
  ];

  const stats = [
    { number: "100%", label: "Compliant Care" },
    { number: "24/7", label: "Availability" },
    { number: "Expert", label: "Educators" },
    { number: "Safe", label: "Spaces" },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>
              Welcome to <span className={styles.brand}>Crechlie</span>
              <br />
              Premium Childcare, Made Easy
            </h1>

            <p className={styles.subtitle}>
              At Crechlie, we redefine what modern childcare feels like.
            </p>

            <p className={styles.description}>
              Based in Ireland, we combine trusted care with technology-driven convenience — giving parents confidence, flexibility, and peace of mind.
            </p>

            <p className={styles.description} style={{ marginBottom: "40px" }}>
              Our state-of-the-art facilities, qualified educators, and play-based curriculum create an enriching environment where children thrive.
            </p>

            <Link href="/dashboard" className={styles.ctaButton}>
              Check Availability Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.featureTitle}>
            <h2>Why Choose Crechlie</h2>
            <p>Discover what makes us the trusted choice for modern childcare in Ireland</p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.id} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div className={styles.featureContent}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className={styles.advantage}>
        <div className={styles.container}>
          <div className={styles.advantageContent}>
            <h2>Experience the Crechlie Advantage</h2>

            <p>
              At Crechlie, we believe premium childcare should be as convenient as it is caring. From real-time updates to flexible scheduling, we're here to simplify your childcare journey — without compromise.
            </p>

            <div className={styles.calloutBox}>
              <h3>Smart. Simple. Seamless childcare.</h3>
              <p>Everything you need to give your child the best start, with the peace of mind you deserve.</p>
            </div>

            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className={styles.container}>
          <h2 style={{ marginBottom: "20px", fontSize: "2rem", fontWeight: "800", color: "var(--text)" }}>
            Ready to Get Started?
          </h2>
          <p style={{ marginBottom: "30px", fontSize: "1.05rem", color: "rgba(12, 9, 13, 0.65)", maxWidth: "600px", margin: "0 auto 30px" }}>
            Join hundreds of Irish families who trust Crechlie for premium, flexible childcare.
          </p>
          <Link href="/signup" className={styles.ctaButton}>
            Sign Up Today
          </Link>
        </div>
      </section>
    </main>
  );
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;
