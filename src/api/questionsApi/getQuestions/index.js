import { _getQuestions } from "../../../data/_DATA";

const getQuestionsApi = async (params) => {
  let data = await _getQuestions();
  let response = Object.values(data);
  return response;
};
export default getQuestionsApi;
