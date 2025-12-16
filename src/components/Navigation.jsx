import { useState } from 'react'
import './Navigation.scss'

const Navigation = ({ pages, currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navigation">
      <div className="navigation__container">
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
                {page.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
