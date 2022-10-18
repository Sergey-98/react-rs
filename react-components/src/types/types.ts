export type Props = {
  children?: React.ReactNode;
  placeholder?: React.ReactNode;
};

export type Data = {
  body?: string;
  id?: number;
  title?: string;
  userId?: number;
};

export type Films = {
  Poster?: string;
  Title?: string;
  Type?: string;
  Year?: string;
  imdbID?: string;
};

export type PromiseFilms = {
  data: Search;
};

type Search = {
  Search: Films[] | [];
};
