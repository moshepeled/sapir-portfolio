import './HomePage.scss'

const HomePage = ({ pages, onSelectPage }) => {
  return (
    <div className="home-page">
      <div className="home-page__container">
        <div className="home-page__header">
          <p className="home-page__subtitle">Hi, I'm Sapir, A product designer specializing in UX/UI design and web development with a passion for building web applications</p>
        </div>
        <div className="home-page__grid">
          {pages.map((page) => (
            <div
              key={page.id}
              className="home-page__card"
              onClick={() => onSelectPage(page.id)}
            >
              <div className="home-page__card-image">
                <img src={page.thumbnail || page.image} alt={page.title} />
              </div>
              <div className="home-page__card-content">
                <h2 className="home-page__card-title">{page.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <footer className="home-page__footer">
          <div className="home-page__social">
            <a href="https://www.linkedin.com/in/sapir-peled" target="_blank" rel="noopener noreferrer" className="home-page__social-link" aria-label="LinkedIn">
              <svg className="home-page__social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://www.instagram.com/sapirpeled" target="_blank" rel="noopener noreferrer" className="home-page__social-link" aria-label="Instagram">
              <svg className="home-page__social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="mailto:sapir@example.com" className="home-page__social-link" aria-label="Email">
              <svg className="home-page__social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="home-page__social-link" aria-label="WhatsApp">
              <svg className="home-page__social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                <path d="M17 11.5h-.01"></path>
                <path d="M13 11.5h-.01"></path>
                <path d="M9 11.5h-.01"></path>
              </svg>
            </a>
          </div>
          <p className="home-page__copyright">All rights reserved to Sapir Peled</p>
        </footer>
      </div>
    </div>
  )
}

export default HomePage

