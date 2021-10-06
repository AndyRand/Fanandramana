import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DepartementServiceBase } from "./base/departement.service.base";

@Injectable()
export class DepartementService extends DepartementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
