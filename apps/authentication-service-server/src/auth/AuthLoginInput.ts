import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class AuthLoginInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    username!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    password!: string;
}

export { AuthLoginInput as AuthLoginInput };