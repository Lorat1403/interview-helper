import { QuestionItem } from "../components/category/category.config";

export interface Response<T> {
  data: T;
  error?: string;
}

export interface ResponseArray<T> {
  data: T[];
  error?: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserRegisterResponce {
  accessToken: string;
  user: User;
}

export interface UserLoginResponce extends UserRegisterResponce { }

export interface CategoryResponce{
  id: number;
  categoryId: number;
  name: string;
  questions: QuestionItem[];
}