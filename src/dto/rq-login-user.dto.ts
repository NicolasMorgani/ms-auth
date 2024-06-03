import { IsEmail, IsNotEmpty, IsString } from "class-validator";

/* ------------------------------- */

export class RqLoginUserDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string;
    @IsString()
    @IsNotEmpty()
    readonly password: string;
}

/* ------------------------------- */
