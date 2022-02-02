
import Drug from "../../../models/Drug";
import User from "../../../models/User";
//A function that resolves a value for a type Drug
export default {
  Drug: {
    wallet: async (drug) => await User.findById(drug.wallet),
  },
  Query: {
    drugs: async () => await Drug.find(),
    drug: async (_, { id }) => await Drug.findById(id),
  },
  Mutation: {
    createDrug: async (_, { data }) => await Drug.create(data),
    updateDrug: async (_, { id, data }) =>
    await Drug.findByIdAndUpdate(id, data, { new: true }),
    deleteDrug: async (_, { id }) => !!(await Drug.findByIdAndDelete(id)),
  },
};