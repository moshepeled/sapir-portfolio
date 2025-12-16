import { useState } from 'react'
import './Navigation.scss'

const Navigation = ({ pages, currentPage, onPageChange, onHomeClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__brand">
          <span className="navigation__brand-text">Sapir Peled</span>
        </div>
        <button 
          className={`navigation__toggle ${isMenuOpen ? 'navigation__toggle--open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navigation__list ${isMenuOpen ? 'navigation__list--open' : ''}`}>
          {pages.map((page) => (
            <li key={page.id} className="navigation__item">
              <button
                className={`navigation__link ${currentPage === page.id ? 'navigation__link--active' : ''}`}
                onClick={() => {
                  onPageChange(page.id)
                  setIsMenuOpen(false)
                }}
              >
                {page.icon && <span className="navigation__icon">{page.icon}</span>}
                {page.title}
              </button>
            </li>
          ))}
          {onHomeClick && (
            <li className="navigation__item navigation__item--home">
              <button
                className="navigation__link navigation__link--home"
                onClick={() => {
                  onHomeClick()
                  setIsMenuOpen(false)
                }}
              >
                <span className="navigation__icon">🏠</span>
                בית
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
