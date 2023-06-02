export interface IContact {
  id?: string;
  name: string;
  number: string;
}
export interface IValues {
  name: string;
  number: string;
}

export interface IContactsState {
  items: IContact[];
  isLoading: boolean;
  error: any;
}
export interface ISate {
  contacts: {
    items: IContact[];
    isLoading: boolean;
    error: any;
  };
  filter: string;
}

export interface IErrorProps {
  message: string;
}
export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}
export interface ModaLProps {
  onCloseModal(): void;
  children: JSX.Element[] | JSX.Element;
  isOpen: boolean;
}

export interface IUserState {
  email: string;
  name: string;
  token: string;
}

export interface IOUser {
  token: string;
  name: string;
  email: string;
}
export interface IOCurrentUser {
  name: string;
  email: string;
}

export interface Icredentials {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
export interface IError {
  error: string;
}