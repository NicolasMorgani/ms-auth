import { Injectable } from '@nestjs/common';

import { RqLoginUserDto, RsLoginUserDto } from 'src/dto';
import { UserSecurity } from 'src/entities';
import { ILoginFactory } from 'src/interfaces';

/* ------------------------------------------------------- */

@Injectable()
export class LoginFactoryService implements ILoginFactory {

  /* ------------------- */

  DTORequesttoLoginEntity(rqLoginUserDto: RqLoginUserDto): UserSecurity {

    const us = new UserSecurity();
    us.email = rqLoginUserDto.email;
    us.password = rqLoginUserDto.password;
    return us;
  }

  /* ------------------- */

  LoginEntitytoDTOResponse(
    statusCode: number,
    message: string,
    userSecurity: UserSecurity,
  ): RsLoginUserDto {
 
    return new RsLoginUserDto(
      { statusCode, message },   // header
       userSecurity // Check if user information is available            
        ? {                      // add data 
            session_token: '',
            email: userSecurity.email,
            
          }
        : null,                  // without data
    );
  }
}

/* ------------------------------------------------------- */
