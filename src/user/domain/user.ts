import { v4 as uuidv4 } from 'uuid';
import { STATUS } from '../../shared/enums/status.enum';
export interface PrimitiveUser {
  id: string;
  name: string;
  lastname: string;
  country: string;
  email: string;
  status: string;
  createAt: Date;
  updateAt: Date;
}

export type UserWithoutSensitiveInfo = Omit<
  PrimitiveUser,
  'id' | 'status' | 'createAt' | 'updateAt'
>;

export class User {
  constructor(private attributes: PrimitiveUser) {}

  static create(createUser: UserWithoutSensitiveInfo) {
    return new User({
      id: uuidv4(),
      name: createUser.name,
      lastname: createUser.lastname,
      country: createUser.country,
      email: createUser.email,
      status: STATUS.PENDING,
      createAt: new Date(Date.now()),
      updateAt: new Date(Date.now()),
    });
  }

  toValue(): PrimitiveUser {
    return {
      id: this.attributes.id,
      name: this.attributes.name,
      lastname: this.attributes.lastname,
      email: this.attributes.email,
      country: this.attributes.country,
      createAt: this.attributes.createAt,
      updateAt: this.attributes.updateAt,
      status: this.attributes.status,
    };
  }
}
