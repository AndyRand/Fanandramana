import { Module } from "@nestjs/common";
import { DepartementModuleBase } from "./base/departement.module.base";
import { DepartementService } from "./departement.service";
import { DepartementController } from "./departement.controller";
import { DepartementResolver } from "./departement.resolver";

@Module({
  imports: [DepartementModuleBase],
  controllers: [DepartementController],
  providers: [DepartementService, DepartementResolver],
  exports: [DepartementService],
})
export class DepartementModule {}
