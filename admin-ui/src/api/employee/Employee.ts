import { Post } from "../post/Post";
import { Departement } from "../departement/Departement";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  birthdate: Date | null;
  emailAdress: string | null;
  book: string | null;
  posts?: Array<Post>;
  dept?: Departement | null;
};
