import User from "../../../model/mongomodel";

export default {
  Mutation: {
    editProfile: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const {
        avatar,
        company,
        companyterm,
        position,
        academy,
        major,
        graduation,
        license,
        pname,
        contents,
        link,
        files,
        awards,
        lname,
        bio,
        updatedAt,
      } = args;
      const user = request.user[0];
      return await User.findOneAndUpdate(
        { _id: user._id },
        {
          avatar,
          license,
          career: { company, companyterm, position },
          course: { academy, major, graduation },
          project: { pname, contents },
          portfolio: { link, files },
          competition: { awards },
          language: { lname },
          bio,
          updatedAt,
        }
      );
    },
  },
};
