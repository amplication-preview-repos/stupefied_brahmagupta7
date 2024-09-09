import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class AuthVerifyInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    token!: string;
}

export { AuthVerifyInput as AuthVerifyInput };