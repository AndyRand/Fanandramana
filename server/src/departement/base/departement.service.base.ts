import { PrismaService } from "nestjs-prisma";
import { Prisma, Departement, Employee } from "@prisma/client";

export class DepartementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DepartementFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DepartementFindManyArgs>
  ): Promise<number> {
    return this.prisma.departement.count(args);
  }

  async findMany<T extends Prisma.DepartementFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DepartementFindManyArgs>
  ): Promise<Departement[]> {
    return this.prisma.departement.findMany(args);
  }
  async findOne<T extends Prisma.DepartementFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DepartementFindUniqueArgs>
  ): Promise<Departement | null> {
    return this.prisma.departement.findUnique(args);
  }
  async create<T extends Prisma.DepartementCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DepartementCreateArgs>
  ): Promise<Departement> {
    return this.prisma.departement.create<T>(args);
  }
  async update<T extends Prisma.DepartementUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DepartementUpdateArgs>
  ): Promise<Departement> {
    return this.prisma.departement.update<T>(args);
  }
  async delete<T extends Prisma.DepartementDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DepartementDeleteArgs>
  ): Promise<Departement> {
    return this.prisma.departement.delete(args);
  }

  async findEmployees(
    parentId: string,
    args: Prisma.EmployeeFindManyArgs
  ): Promise<Employee[]> {
    return this.prisma.departement
      .findUnique({
        where: { id: parentId },
      })
      .employees(args);
  }
}
