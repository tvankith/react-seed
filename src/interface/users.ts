interface CreateUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role_id: number;
  gender: string;
  dateOfBirth: string;
  parent_id: number;
}

interface LoginUser {
  email: string;
  password: string;
}

export type { CreateUser, LoginUser };
