import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class ForgotPasswordInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    email!: string;
}

export { ForgotPasswordInput as ForgotPasswordInput };