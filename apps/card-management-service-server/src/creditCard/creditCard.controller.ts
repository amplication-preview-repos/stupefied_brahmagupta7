import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreditCardService } from "./creditCard.service";
import { CreditCardControllerBase } from "./base/creditCard.controller.base";

@swagger.ApiTags("creditCards")
@common.Controller("creditCards")
export class CreditCardController extends CreditCardControllerBase {
  constructor(protected readonly service: CreditCardService) {
    super(service);
  }
}
