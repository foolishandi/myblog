// Created by foolishandi on 2023/12/10.

#ifndef CPP_TEST_STATIC_CPP_ALGORITHM_TREE_DATA_TO_TREE_H_
#define CPP_TEST_STATIC_CPP_ALGORITHM_TREE_DATA_TO_TREE_H_
#include "tree.h"
class DataToTree {
public:
  explicit DataToTree(const vector<pair<string, string>> &belongToList)
      : belongToList_(belongToList) {
    initTree();
  }
  ~DataToTree() { delete tree_; }
  //  获取满足条件的路径总数
  int getStrPathCount(const string &target) {
    auto allPaths = tree_->findAllPaths(target);
    // 打印满足条件的路径
    for (int i = 0; i < allPaths.size(); i++) {
      auto node = allPaths.at(i);
      string path = "";
      while (node->parent) {
        path += node->data + "->";
        node = node->parent;
      }
      path.resize(path.size() - 2);
      cout << "path" + to_string(i) + ":" << path << endl;
    }
    return allPaths.size();
  }

private:
  vector<pair<string, string>> belongToList_;
  Tree *tree_{new Tree("")};

private:
  //  初始化树，生成树
  void initTree() {
    for (auto &item : belongToList_) {
      auto parentNode = tree_->findChild(item.second);
      auto childNode = tree_->findChild(item.first);
      //  需要考虑节点增加时，已生成的树里面有没有新节点相关的子结点和父节点
      if (parentNode == nullptr) {
        auto node = new TreeNode(item.second);
        if (childNode) {
          auto ltr = std::find(childNode->parent->childs.begin(),
                               childNode->parent->childs.end(), childNode);
          node->parent = childNode->parent;
          childNode->parent = node;
          node->addChild(childNode, node);
          node->parent->childs.erase(ltr);
        } else {
          node->addChild(item.first, node);
          tree_->addChild(node, tree_);
        }
      } else {
        if (childNode) {
          auto ltr = std::find(childNode->parent->childs.begin(),
                               childNode->parent->childs.end(), childNode);
          childNode->parent->childs.erase(ltr);
          parentNode->addChild(childNode, parentNode);
        } else {
          parentNode->addChild(item.first, parentNode);
        }
      }
    }
  }
};
#endif // CPP_TEST_STATIC_CPP_ALGORITHM_TREE_DATA_TO_TREE_H_
