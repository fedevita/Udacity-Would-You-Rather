import { _getUsers } from "../../../data/_DATA";

const getUsersApi = async (params) => {
  let data = await _getUsers();
  let response = Object.values(data);
  return response;
};
export default getUsersApi;
