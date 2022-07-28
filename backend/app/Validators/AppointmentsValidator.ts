import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import { schema, rules, Rule, validator } from "@ioc:Adonis/Core/Validator";

export default class AppointmentsValidator { 
  constructor(private ctx: HttpContextContract) {}

  private get requiredRules(): Rule[] {
    return this.ctx.request.intended() === "POST" ? [rules.required()] : [];
  }

  public reporter = validator.reporters.api;

  public schema = schema.create({
    dateDebut: schema.date({}, [
        ...this.requiredRules,
        rules.after('today'),
    ]),
    dateFin: schema.date({}, [
        ...this.requiredRules,
        rules.after('today'),
    ]),
    clientId: schema.number(),
    staffId: schema.number()
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
    "date.required": "Une date de rendez-vous est requise",
    "date.after": "Impossible de prendre un rendez-vous à cette date",
  };
}