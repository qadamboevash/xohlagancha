import './home.css'

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Capanna</h1>
          <p className="hero-subtitle">Italiya ta'mi bilan tanishing</p>
          <p className="hero-description">
            Bizning restoranimizda eng mazali italyan taomlarini tatib ko'ring.
            Sizga eng yaxshi xizmat ko'rsatish bizning maqsadimiz.
          </p>
          <div className="hero-buttons">
            <a href="/menu" className="btn btn-primary">
              Menuni ko'rish
            </a>
            <a href="/booking" className="btn btn-secondary">
              Stol bron qilish
            </a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Nima uchun bizni tanlash kerak?</h2>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon">🍕</div>
              <h3>Original taomlar</h3>
              <p>Italiyadan kelgan oshpazlarimiz original retseptlar bo'yicha tayyorlaydi</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🌿</div>
              <h3>Tabiiy mahsulotlar</h3>
              <p>Faqat tabiiy va sifatli mahsulotlardan foydalanamiz</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">⭐</div>
              <h3>Yuqori xizmat</h3>
              <p>Bizning jamoa sizga eng yaxshi xizmat ko'rsatishga tayyor</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🎉</div>
              <h3>Maxsus tadbirlar</h3>
              <p>Tug'ilgan kunlar, to'ylar va boshqa tadbirlar uchun joy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="contact-card card">
            <h2>Biz bilan bog'laning</h2>
            <div className="contact-details">
              <p>📍 Manzil: Toshkent shahri</p>
              <p>📞 Telefon: +998 90 123 45 67</p>
              <p>🕐 Ish vaqti: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

