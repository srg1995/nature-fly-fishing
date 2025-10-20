export interface User {
  id: number;
  email: string;
  name?: string;
  token: string;
}
export interface AuthCredentials {
  email: string;
  password: string;
}
