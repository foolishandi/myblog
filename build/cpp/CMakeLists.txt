cmake_minimum_required(VERSION 3.26)
project(cpp_test)

set(CMAKE_CXX_STANDARD 17)
add_executable(cpp_test main.cpp
        algorithm/tree/data_to_tree.h
        algorithm/tree/tree.h)
