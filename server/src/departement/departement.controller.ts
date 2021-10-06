import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DepartementService } from "./departement.service";
import { DepartementControllerBase } from "./base/departement.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("departements")
@common.Controller("departements")
export class DepartementController extends DepartementControllerBase {
  constructor(
    protected readonly service: DepartementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
