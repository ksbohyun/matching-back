import User from "../../../model/mongomodel";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { email, fullname, username } = args;
      await User.create({
        email,
        fullname,
        username,
      });
      return true;
    },
  },
};
