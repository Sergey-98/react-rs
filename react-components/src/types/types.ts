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
export type ModalProps = {
  val: CardComicsProps; 
  visible: boolean;
};
export type CardProps = {
  value: CardComicsProps;
  key: undefined | string;
  onOpenModal: () => void;
};
export type Image = {
  path: string;
  extension: string;
}
export type Prices = {
  type?: string;
  price?: number;
}
type Creators = {
  name?: string;
  role?: string;
}
type ItemCreator = {
  items?: Creators[];
}
export type CardComicsProps = {
  title?: string;
  issueNumber?: number;
  thumbnail: Image;
  modified?: string;
  id?: number;
  creators?: ItemCreator;
  prices: Prices[];
}