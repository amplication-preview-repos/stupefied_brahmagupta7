import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreditCardServiceBase } from "./base/creditCard.service.base";

@Injectable()
export class CreditCardService extends CreditCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
