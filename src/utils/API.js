import axios from "axios";

const BASEURL="https://randomuser.me/api/?results=200&nat=us" 

export default {
  // Gets all users
  getUsers: function() {
    return axios.get(BASEURL);
  }
};
