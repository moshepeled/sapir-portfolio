import { useState } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import ImagePage from './components/ImagePage'
import './App.scss'

const App = () => {
  const [currentPage, setCurrentPage] = useState(null)

  const pages = [
    { id: 1, image: '/images/page1.png', thumbnail: '/images/yoga-tumb.png', title: 'אחים ליוגה', icon: '🧘' },
    { id: 2, image: '/images/page2.png', thumbnail: '/images/card-tumb.png', title: 'מלון תאנה', icon: '🏨' },
    { id: 3, image: '/images/page3.png', thumbnail: '/images/call-tumb.jpg', title: 'קול קורא', icon: '🎨' },
    { id: 4, image: '/images/page4.png', thumbnail: '/images/hotel-tumb.png', title: 'ניהול מלון', icon: '💼' },
  ]

  const handleSelectPage = (pageId) => {
    setCurrentPage(pageId)
  }

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId)
  }

  const selectedPage = currentPage ? pages.find(p => p.id === currentPage) : null

  return (
    <div className="app">
      {currentPage && (
        <Navigation
          pages={pages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onHomeClick={() => setCurrentPage(null)}
        />
      )}
      <main className="main-content">
        {!currentPage ? (
          <HomePage pages={pages} onSelectPage={handleSelectPage} />
        ) : (
          <ImagePage image={selectedPage.image} />
        )}
      </main>
    </div>
  )
}

export default App
