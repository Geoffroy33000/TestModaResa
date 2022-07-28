import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules, Rule, validator } from "@ioc:Adonis/Core/Validator";

export default class ClientValidator {
  constructor(private ctx: HttpContextContract) {}

  private get requiredRules(): Rule[] {
    return this.ctx.request.intended() === "POST" ? [rules.required()] : [];
  }

  private get uniqueRules(): Rule[] {
    return this.ctx.request.intended() === "POST"
      ? [rules.unique({ table: "clients", column: "name" })]
      : [];
  }

  public reporter = validator.reporters.api;

  public schema = schema.create({
    name: schema.string.optional({}, [
      ...this.requiredRules,
      ...this.uniqueRules,
    ]),
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
    "name.required": "Le nom de l'entreprise est requis",
    "name.unique": "Cette entreprise existe déja",
  };
}
