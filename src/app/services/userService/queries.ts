import { gql } from "@apollo/client";

// export const FETCH_USER_LIST =  gql`
//     query FetchUserList{
//     country(code:"US"){
//       code
//       name
//     }
//   }`;

  export const FETCH_USER_LIST =  gql`
    query FetchUserList($page: Int){
    Page(page: $page) {
        media {
            id
            description
            title {
                english
            }
            coverImage {
                extraLarge
            }
        }
        
    }
  }`

export const NEW_USER = gql`
  mutation($fName:String, $lName: String, $user: String, $city: String, $state: String, $zip: String ) {
    SaveUser(fName:$fName, lName: $lName, user: $user, city: $city, state:$state, zip:$zip) {
        fName
        lName
        user
        city
        state
    }
  }
`;