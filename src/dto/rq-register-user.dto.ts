import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

/* ------------------------------- */

export class RqRegisterUserDto {
   
    @IsNotEmpty()
    @IsString()
    @IsString()
    readonly email: string;
    @IsNotEmpty()
    @IsString()
    @Length(6, 20)
    readonly password: string;
}

/* ------------------------------- */
