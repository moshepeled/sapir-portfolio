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
      </div>
    </div>
  )
}

export default HomePage

