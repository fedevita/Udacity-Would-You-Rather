import { _getQuestions } from "../../../data/_DATA";

const getQuestionsSpi = async (params) => {
  let data = await _getQuestions();
  let response = Object.values(data);
  return response;
};
export default getQuestionsSpi;
