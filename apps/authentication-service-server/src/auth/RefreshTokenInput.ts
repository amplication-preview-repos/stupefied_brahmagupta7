import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class RefreshTokenInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    refreshToken!: string;
}

export { RefreshTokenInput as RefreshTokenInput };