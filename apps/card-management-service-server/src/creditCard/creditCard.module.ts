import { Module } from "@nestjs/common";
import { CreditCardModuleBase } from "./base/creditCard.module.base";
import { CreditCardService } from "./creditCard.service";
import { CreditCardController } from "./creditCard.controller";
import { CreditCardResolver } from "./creditCard.resolver";

@Module({
  imports: [CreditCardModuleBase],
  controllers: [CreditCardController],
  providers: [CreditCardService, CreditCardResolver],
  exports: [CreditCardService],
})
export class CreditCardModule {}
