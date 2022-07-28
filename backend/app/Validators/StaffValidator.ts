import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules, Rule, validator } from "@ioc:Adonis/Core/Validator";

export default class StaffValidator {
  constructor(private ctx: HttpContextContract) {}

  private get requiredRules(): Rule[] {
    return this.ctx.request.intended() === "POST" ? [rules.required()] : [];
  }

  public reporter = validator.reporters.api;

  public schema = schema.create({
    firstName: schema.string.optional({}, this.requiredRules),
    lastName: schema.string.optional({}, this.requiredRules)
  });

  public cacheKey = this.ctx.request.parsedUrl.path || this.ctx.routeKey;

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {
    "firstName.required": "Le prénom de famille est requis",
    "lastName.unique": "Le nom de famille est requis",
  };
}
