import User from "../../../model/mongomodel";

export default {
  Query: {
    findUser: async (_, args) => {
      const { username } = args;
      return await User.findOne({ username });
    },
  },
};
