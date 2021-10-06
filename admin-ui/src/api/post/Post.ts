import { Employee } from "../employee/Employee";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  employee?: Employee | null;
};
