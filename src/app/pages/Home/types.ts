import { FetchUserList } from "../../services/userService/__generated__/FetchUserList";

export interface IHomeState {
    userList: FetchUserList | null;
}