import { RsGenericHeaderDto } from "./rs-generic-header.dto";

/* ------------------------------- */

export class RsRegisterUserDataDto {
    email: string;
}

/* ------------------------------- */

export class RsRegisterUserDto {
    rsGenericHeaderDto: RsGenericHeaderDto;
    rsRegisterUserDataDto: RsRegisterUserDataDto;

    constructor(
        rsGenericHeaderDto: RsGenericHeaderDto,
        rsRegisterUserDataDto: RsRegisterUserDataDto,
      ) {
        this.rsGenericHeaderDto = rsGenericHeaderDto;
        this.rsRegisterUserDataDto = rsRegisterUserDataDto;
      }
}

/* ------------------------------- */
