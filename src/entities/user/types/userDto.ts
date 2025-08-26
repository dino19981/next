export interface UserDto {
  online: true;
  avatar: string;
  name: string;
  username: string;
  sex: string;
  verified: true;
  stories: {
    total_count: number;
    seen_count: number;
  };
}
