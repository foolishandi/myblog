// Created by foolishandi on 2023/12/10.

#ifndef MYBLOG_STATIC_CPP_ALGORITHM_TREE_H_
#define MYBLOG_STATIC_CPP_ALGORITHM_TREE_H_
#include "iostream"
#include "string"
#include "vector"
#include <algorithm>
using namespace std;
// 结点类
class TreeNode {
public:
  explicit TreeNode(string data) : data(data) {}
  ~TreeNode() {
    for (auto &item : childs) {
      delete item;
    }
  }
  string data{""};
  //  保留父节点信息，以便打印路径
  TreeNode *parent{nullptr};
  //  递归查找子节点
  TreeNode *findChild(const string &target) {
    for (auto &item : childs) {
      if (item->data == target) {
        return item;
      } else {
        auto res = item->findChild(target);
        if (res) {
          return res;
        }
      }
    }
    return nullptr;
  }
  //  添加子节点
  void addChild(string data, TreeNode *parent = nullptr) {
    auto child = new TreeNode(data);
    child->parent = parent;
    childs.push_back(child);
  }
  void addChild(TreeNode *node, TreeNode *parent = nullptr) {
    node->parent = parent;
    parent->childs.push_back(node);
  }
  vector<TreeNode *> childs{};
};
// 树类
class Tree : public TreeNode {
public:
  explicit Tree(string data) : TreeNode(data), ignoreCase_(false){};
  ~Tree(){};
  //  设置是否忽略大小写
  void setIgnoreCase(bool ignoreCase) { ignoreCase_ = ignoreCase; }
  //  获取满足条件的叶子结点列表
  vector<TreeNode *> findAllPaths(const string &target) {
    vector<TreeNode *> resultNodesList;
    dfs(this, target, resultNodesList);
    return resultNodesList;
  }

private:
  // 深度优先遍历
  void dfs(TreeNode *node, const string &target,
           vector<TreeNode *> &resultNodesList, bool isCheck = false) {
    // 已经确认改路径满足要求，仅仅计算叶子结点个数
    if (isCheck) {
      if (node->childs.empty()) {
        resultNodesList.push_back(node);
      } else {
        for (auto &child : node->childs) {
          dfs(child, target, resultNodesList, true);
        }
      };
      return;
    }
    //  不满足要求，要匹配字符，匹配要求满足就把check设为true进行找结点下的叶子结点
    if (checkMatchStr(node->data, target, ignoreCase_)) {
      if (node->childs.empty()) {
        resultNodesList.push_back(node);
      } else {
        for (auto &child : node->childs) {
          dfs(child, target, resultNodesList, true);
        }
      };
      return;
    }
    // 没匹配上字符，直接找字结点遍历
    for (auto &child : node->childs) {
      dfs(child, target, resultNodesList);
    }
  }
  // 匹配规则，需要数据匹配目标的所有字符，包括重复的字符
  bool checkMatchStr(string data, string target, bool ignoreCase = false) {
    if (ignoreCase) {
      transform(data.begin(), data.end(), data.begin(), ::tolower);
      transform(target.begin(), target.end(), target.begin(), ::tolower);
    }
    sort(target.begin(), target.end());
    sort(data.begin(), data.end());
    if (data.find(target) != string::npos) {
      return true;
    }
    return false;
  }

private:
  bool ignoreCase_;
};
#endif // MYBLOG_STATIC_CPP_ALGORITHM_TREE_H_
