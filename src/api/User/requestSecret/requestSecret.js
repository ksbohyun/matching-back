import User from "../../../model/mongomodel";
import { generateSecret, sendSecretMail } from "../../../utils";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { email } = args;
      const loginSecret = generateSecret();
      try {
        await sendSecretMail(email, loginSecret);
        await User.updateOne({ email }, { loginSecret });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
