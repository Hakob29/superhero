import User from "./User.interface ";

interface UserSliceInterface {
  user: User | null;
  status: string | null;
  error: string | null;
  token: string | null;
}

export default UserSliceInterface;
