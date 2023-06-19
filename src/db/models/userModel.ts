import { model } from "mongoose";
import userSchema from "../schemas/userSchema";

interface UserData {
  userId: String;
  records: [];
}

//생성된 모델 = <모델이 사용할 데이터 타입>(생성할 모델 이름, 사용할 스키마)
const User = model<UserData>("users", userSchema);

export default class UserModel {
  async postUser(user: UserData): Promise<UserData | null> {
    return await User.create(user);
  }
}

const userModelInstance = new UserModel();
export { userModelInstance };
