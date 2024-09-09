import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class ResetPasswordInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    token!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    newPassword!: string;
}

export { ResetPasswordInput as ResetPasswordInput };