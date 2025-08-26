import { UserDto } from '@/src/entities/user/types';

export const getUserName = (name: string, users: UserDto[] | undefined) => {
  if (users && users.length > 1) {
    const [first, second] = users;

    return `${first.name}, ${second.name}`;
  }

  return name;
};
