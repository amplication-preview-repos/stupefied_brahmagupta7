import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class CommonResponse {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    message!: string;

    @ApiProperty({
        required: true,
        type: () => Boolean
    })
    @Type(() => Boolean)
    success!: boolean;
}

export { CommonResponse as CommonResponse };