import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {

    e.preventDefault()
    navigate("/search?q=" + encodeURIComponent(e.target.query.value.trim()))

  }

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </a>

        <nav className="main-nav">
          <NavLink className={'nav-item'} to="/">Главная</NavLink>
          <NavLink className={'nav-item'} to="/movies">Каталог</NavLink>
          <NavLink className={'nav-item'} to="/about">О проекте</NavLink>
        </nav>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
          <input
            name="query"
            placeholder="Поиск фильмов"
            type="text"
          />
        </form>
      </div>
    </header>
  );
}
