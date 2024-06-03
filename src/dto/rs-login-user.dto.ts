import { RsGenericHeaderDto } from './rs-generic-header.dto';

/* ------------------------------- */

export class RsLoginUserDataDto {
  session_token: string;
  email: string;
}

/* ------------------------------- */

export class RsLoginUserDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsLoginUserData?: RsLoginUserDataDto;

  constructor(
    rsGenericHeaderDto: RsGenericHeaderDto,
    rsLoginUserData: RsLoginUserDataDto,
  ) {
    this.rsGenericHeaderDto = rsGenericHeaderDto;
    this.rsLoginUserData = rsLoginUserData;
  }
}

/* ------------------------------- */
