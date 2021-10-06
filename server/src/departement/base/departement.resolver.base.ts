import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateDepartementArgs } from "./CreateDepartementArgs";
import { UpdateDepartementArgs } from "./UpdateDepartementArgs";
import { DeleteDepartementArgs } from "./DeleteDepartementArgs";
import { DepartementFindManyArgs } from "./DepartementFindManyArgs";
import { DepartementFindUniqueArgs } from "./DepartementFindUniqueArgs";
import { Departement } from "./Departement";
import { EmployeeFindManyArgs } from "../../employee/base/EmployeeFindManyArgs";
import { Employee } from "../../employee/base/Employee";
import { DepartementService } from "../departement.service";

@graphql.Resolver(() => Departement)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class DepartementResolverBase {
  constructor(
    protected readonly service: DepartementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Departement",
    action: "read",
    possession: "any",
  })
  async _departementsMeta(
    @graphql.Args() args: DepartementFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Departement])
  @nestAccessControl.UseRoles({
    resource: "Departement",
    action: "read",
    possession: "any",
  })
  async departements(
    @graphql.Args() args: DepartementFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Departement[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Departement",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Departement, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Departement",
    action: "read",
    possession: "own",
  })
  async departement(
    @graphql.Args() args: DepartementFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Departement | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Departement",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Departement)
  @nestAccessControl.UseRoles({
    resource: "Departement",
    action: "create",
    possession: "any",
  })
  async createDepartement(
    @graphql.Args() args: CreateDepartementArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Departement> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Departement",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Departement"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Departement)
  @nestAccessControl.UseRoles({
    resource: "Departement",
    action: "update",
    possession: "any",
  })
  async updateDepartement(
    @graphql.Args() args: UpdateDepartementArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Departement | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Departement",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Departement"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Departement)
  @nestAccessControl.UseRoles({
    resource: "Departement",
    action: "delete",
    possession: "any",
  })
  async deleteDepartement(
    @graphql.Args() args: DeleteDepartementArgs
  ): Promise<Departement | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Employee])
  @nestAccessControl.UseRoles({
    resource: "Departement",
    action: "read",
    possession: "any",
  })
  async employees(
    @graphql.Parent() parent: Departement,
    @graphql.Args() args: EmployeeFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Employee[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Employee",
    });
    const results = await this.service.findEmployees(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
