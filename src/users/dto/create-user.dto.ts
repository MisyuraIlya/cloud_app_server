import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default:'test@gmail.com'
    })
    email: string;
    @ApiProperty({
        default:'ilya misyura'
    })
    fullName: string;
    @ApiProperty({
        default:'123456'
    })
    password: string;
}
