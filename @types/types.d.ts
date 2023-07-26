export type Contact = {
  name: string;
  email: string;
  number: number;
  _id: string;
  owner?: string;
  favorite?: boolean;
};

export type User = {
  name: string | null;
  email: string | null;
  subscription: string | null;
  avatarURL?: string;
  _id?: string;
};

export type RegisterResponse = {
  message: string;
  user: User;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type ContactData = {
  name: string;
  number: string;
  email: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = {
  name: string;
  email: string;
  password: string;
};
