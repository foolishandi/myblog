
#include "algorithm/tree/data_to_tree.h"
int main() {
  // pair，第一个字符串是第二个字符串的子节点，暂定输入的子节点字符不会重复，父节点可以重复
  vector<pair<string, string>> belongToList{
      {"ACD", "C"},  {"DCA", "C"},  {"AD", "AH"}, {"EF", "ACD"}, {"C", "AH"},
      {"CD", "AD"},  {"GH", "ACD"}, {"A", "DCA"}, {"CF", "DCA"}, {"B", "DCA"},
      {"CDE", "AC"}, {"E", "AC"},   {"EG", "AG"}};
  const string target = "CD";
  DataToTree tree(belongToList);
  auto allPathCount = tree.getStrPathCount(target);
  cout << "the count of allPath which include \"" + target + "\":"
       << allPathCount << endl;
  return 0;
}
