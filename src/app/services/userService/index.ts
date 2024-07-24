import { apolloClient } from "../../graphgl";
import { FetchUserList } from "./__generated__/FetchUserList";
import { FETCH_USER_LIST } from "./queries";

class UserService {
  async fetchUserList(page: Number, perPage = 10): Promise<FetchUserList> {
    try {
      const response = await apolloClient.query({
        query: FETCH_USER_LIST,
        variables: { page, perPage },
      });
      if (!response || !response.data) {
        throw new Error("somethig went wrong");
      }
      return response.data.Page;
    } catch (err) {
      throw err;
    }
  }
}

export default new UserService();
