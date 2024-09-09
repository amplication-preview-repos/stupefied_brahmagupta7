import * as graphql from "@nestjs/graphql";
import { CreditCardResolverBase } from "./base/creditCard.resolver.base";
import { CreditCard } from "./base/CreditCard";
import { CreditCardService } from "./creditCard.service";

@graphql.Resolver(() => CreditCard)
export class CreditCardResolver extends CreditCardResolverBase {
  constructor(protected readonly service: CreditCardService) {
    super(service);
  }
}
