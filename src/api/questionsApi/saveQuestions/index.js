import { _saveQuestion } from "../../../data/_DATA";

const saveQuestionApi = async (params) => {
  let data = await _saveQuestion(params);
  let response = data;
  return response;
};
export default saveQuestionApi;
