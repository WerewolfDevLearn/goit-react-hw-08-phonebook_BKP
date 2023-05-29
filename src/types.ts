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
