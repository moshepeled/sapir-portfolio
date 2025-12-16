import { useState } from 'react'
import Navigation from './components/Navigation'
import ImagePage from './components/ImagePage'
import './App.scss'

const App = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const pages = [
    { id: 1, image: '/images/page1.png', title: 'אחים ליוגה' },
    { id: 2, image: '/images/page2.png', title: 'מלון תאנה' },
    { id: 3, image: '/images/page3.png', title: 'קול קורא' },
    { id: 4, image: '/images/page4.png', title: 'ניהול מלון' },
  ]

  return (
    <div className="app">
      <Navigation
        pages={pages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <main className="main-content">
        <ImagePage image={pages[currentPage - 1].image} />
      </main>
    </div>
  )
}

export default App
