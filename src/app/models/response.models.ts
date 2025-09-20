export interface Responce<T>{
  data: T;
  errror?: string;
}

export interface ResponceArray<T>{
  data: T[];
  error?: string;
}
  