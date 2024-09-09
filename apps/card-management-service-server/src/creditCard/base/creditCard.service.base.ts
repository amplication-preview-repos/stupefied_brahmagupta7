/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CreditCard as PrismaCreditCard } from "@prisma/client";

export class CreditCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CreditCardCountArgs, "select">
  ): Promise<number> {
    return this.prisma.creditCard.count(args);
  }

  async creditCards(
    args: Prisma.CreditCardFindManyArgs
  ): Promise<PrismaCreditCard[]> {
    return this.prisma.creditCard.findMany(args);
  }
  async creditCard(
    args: Prisma.CreditCardFindUniqueArgs
  ): Promise<PrismaCreditCard | null> {
    return this.prisma.creditCard.findUnique(args);
  }
  async createCreditCard(
    args: Prisma.CreditCardCreateArgs
  ): Promise<PrismaCreditCard> {
    return this.prisma.creditCard.create(args);
  }
  async updateCreditCard(
    args: Prisma.CreditCardUpdateArgs
  ): Promise<PrismaCreditCard> {
    return this.prisma.creditCard.update(args);
  }
  async deleteCreditCard(
    args: Prisma.CreditCardDeleteArgs
  ): Promise<PrismaCreditCard> {
    return this.prisma.creditCard.delete(args);
  }
}
