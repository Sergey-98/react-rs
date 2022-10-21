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

export type CardData = {
  title?: string;
  director?: string;
  producer?: string;
  release_date?: string;
  episode_id?: number;
};

type Error = {
  message: string;
  class: string;
};

export type stateForm = {
  errorName: Error;
  errorSurname: Error;
  errorDate: Error;
  errorCheck: Error;
  errorFile: Error;
  errorEmail: Error;
  errorGender: Error;
  buildData: Card[];
  isValid: boolean;
};

export type Card = {
  name: string;
  surname: string;
  gender: string;
  date: string;
  email: string;
  check: boolean;
  file: string;
};

export type CardProps = {
  value: Films;
  key: undefined | string;
  onOpenModal: () => void;
};
