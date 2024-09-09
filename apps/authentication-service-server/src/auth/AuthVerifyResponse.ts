import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class AuthVerifyResponse {
    @ApiProperty({
        required: true,
        type: () => Boolean
    })
    @Type(() => Boolean)
    isValid!: boolean;
}

export { AuthVerifyResponse as AuthVerifyResponse };