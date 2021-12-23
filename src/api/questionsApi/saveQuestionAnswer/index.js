import { _saveQuestionAnswer } from "../../../data/_DATA";

const saveQuestionAnswerApi = async (params) => {
  let { authedUser, qid, answer } = { ...params };
  let data = await _saveQuestionAnswer({ authedUser, qid, answer });
  let response = Object.values(data);
  return response;
};
export default saveQuestionAnswerApi;
