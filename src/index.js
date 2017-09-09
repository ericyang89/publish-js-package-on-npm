// add Comment
const aaa = (content = "", blackList = []) => {
  const reg = new RegExp(blackList.join("|"), "ig");
  return content.replace(reg, "*****");
};
export default aaa;
