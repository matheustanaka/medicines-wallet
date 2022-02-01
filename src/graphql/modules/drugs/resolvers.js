
import Drug from "../../../models/Drug";
import User from "../../../models/User";
//A function that resolves a value for a type Drug
export default {
  Drug: {
    wallet: (drug) => User.findById(drug.wallet),
  },
  Query: {
    drugs: () => Drug.find(),
    drug: (_, { id }) => Drug.findById(id),
  },
  Mutation: {
    createDrug: (_, { data }) => Drug.create(data),
    updateDrug: (_, { id, data }) =>
    Drug.findByIdAndUpdate(id, data, { new: true }),
    deleteDrug: async (_, { id }) => !!(await Drug.findByIdAndDelete(id)),
  },
};