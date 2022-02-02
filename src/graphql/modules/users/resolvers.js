import User from '../../../models/User'

export default {
  User: {
    name: async (user) => await `${user.name}`
  },
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id)
  },
  Mutation: {
    createUser: async (_, { data }) => await User.create(data),
    updateUser: async (_, { id, data }) =>
      await User.findByIdAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => !!(await User.findByIdAndDelete(id))
  }
}
