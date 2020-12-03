import User from "../../../model/mongomodel";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { email, secret } = args;
      const user = await User.findOne({ email });
      if (user.loginSecret === secret) {
        await User.updateOne({ _id: user._id }, { loginSecret: "" });
        return generateToken(user._id);
      } else {
        throw Error("이메일 인증이 불가합니다.");
      }
    },
  },
};
