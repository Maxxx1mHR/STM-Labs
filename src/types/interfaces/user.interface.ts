export interface IUser {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    state: string;
  };
  email: string;
  phone: string;
  registered: {
    date: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  login: {
    uuid: string;
  };
}
