import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/* ------------------------------- */

@Entity()
export class UserSecurity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column({unique: true})
  email: string;

  @Column()
  password: string;

 

}

/* ------------------------------- */

