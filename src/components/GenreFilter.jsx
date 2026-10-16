import { useSearchParams } from "react-router-dom";
import { genres } from "../data/movies";

export default function GenreFilter() {

  const [searchParams, setSearchParams] = useSearchParams()
  const activeGenre = searchParams.get("genres") || ''

  const onSelect = (id) => {
    setSearchParams(id ? {genres: id} : {})
  }

  return (
    <div className="genres">
      {genres.map((genre) => (
        <button
          key={genre.id || 'all'}
          type="button"
          onClick={() => onSelect(genre.id)}
          className={'genre-btn' + (genre.id === activeGenre ? ' active' : '')}
        >
          {genre.label}
        </button>
      ))}
    </div>
  );
}
