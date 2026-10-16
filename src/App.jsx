import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import { Layout } from './components/Layout.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import MoviePage from './pages/MoviePage.jsx';
import SearchPage from './pages/SearchPage.jsx';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='movies' element={<MoviesPage/>} />
          <Route path='about' element={<AboutPage/>} />
          <Route path='movies/:id' element={<MoviePage/>} />
          <Route path='search' element={<SearchPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
