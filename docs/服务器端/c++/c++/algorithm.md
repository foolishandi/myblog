```c++
all_of ：所有元素是否都
/* 判断范围内是否都满足func */
void test_all_of() {
	std::vector<int> vc = {1, 3, 4, 5, 6};
 	bool rt = std::all_of(vc.begin(), vc.end(), [](int i){
 		 	return i != 0;
 		});
	std::cout << "vc 中是否都没有0：" << (rt ? "是" : "否") << std::endl;
}

any_of ：所有元素是否存在
void test_any_of() {
	std::vector<int> vc = {1, 3, 4, 5, 6};
	bool rt = std::any_of(vc.begin(), vc.end(), [](int i){
	 	return i != 0;
	});
	std::cout << "vc 中是否存在0：" << (rt ? "否" : "是") << std::endl;
}


none_of ：是否都没有满足条件
void test_none_of() {
	std::vector<int> vc = {1, 3, 14, 15, 6};
	bool rt = std::none_of(vc.begin(), vc.end(), [](int i){
	 	return i > 9;
	});
	std::cout << "vc 中是否都大于9：" << (rt ? "是" : "否") << std::endl;
}



for_each：将自定义函数用于指定范围
void test_for_each() {
	std::vector<int> vc = {1, 3, 14, 15, 6};
	std::for_each(vc.begin(), vc.end(), [](int& i){
	 	i += 2;
	});
	for(auto& i : vc)
		std::cout << i << " ";
	std::cout << std::endl; 
}


find ：查找指定范围内的值
void test_find() {
	std::vector<int> vc = {1, 3, 14, 15, 6};
	auto i = std::find(vc.begin(), vc.end(), 3);
	std::cout << *i; 
}

find_if ：获取自定义函数查找指定范围内的第一个元素
void test_find_if() {
	std::vector<int> vc = {1, 3, 14, 15, 6};
	auto i = std::find_if(vc.begin(), vc.end(), [](int i){
			return i > 4;
		});
	std::cout << *i; 
}

adjacent_find：查找范围内相等的相邻元素
void test_adjacent_find() {
	std::vector<int> vc = {1, 3, 3, 15, 15, 8};
	auto it = std::adjacent_find(vc.begin(), vc.end());
	std::cout << *it; 
}

count：统计该范围内出现的次数
void test_count() {
	std::vector<int> vc = {1, 3, 3, 15, 15, 8};
	int it = std::count(vc.begin(), vc.end(), 8);
	std::cout << it << std::endl; 
}

equal：两个范围内的元素是否相等
void test_equal() {
	std::vector<int> vc = {1, 3, 3, 15, 15, 8};
	std::vector<int> vc1 = {1, 3, 3, 15, 15, 8};
	bool it = std::equal(vc.begin(), vc.end(), vc1.begin());
	std::cout << it << std::endl;
}

is_permutation：判断范围是否是另一个排列【与顺序无关】
void test_is_permutation() {
	std::vector<int> vc = {1, 3, 3, 15, 15, 8};
	std::vector<int> vc1 = {1, 3, 8, 15, 3, 15};
	bool it = std::is_permutation(vc.begin(), vc.end(), vc1.begin());
	std::cout << it << std::endl;
}

search：子序列的搜索范围
void test_search () {
	std::vector<int> vc = {1, 3, 3, 15, 15, 8};
	std::vector<int> vc1 = {1, 3};
	auto it = std::search (vc.begin(), vc.end(), vc1.begin(), vc1.end());
	std::cout << "vc1在vc中第一次出现的位置：" << it - vc.begin() << std::endl;
}

copy：复制指定范围元素
void test_copy() {
	std::vector<int> vc = {1, 3, 3, 15, 15, 8};
	std::vector<int> vc1;
	vc1.resize(vc.size());
	std::copy(vc.begin(), vc.end(), vc1.begin());
	for(auto& i:vc){
		std::cout << i << std::endl;
	}
}

move：元素移动
void test_move() {
	std::vector<int> vc = {1, 3, 3, 15, 15, 8};
	std::vector<int> vc1;
	std::vector<int> vc2;
	vc2.resize(vc.size());
	vc1.resize(vc.size());
	std::move(vc.begin(), vc.end(), vc1.begin());
	for(auto& i:vc1){
		std::cout << i << " ";
	}
	std::cout << std::endl;
	vc2 = std::move(vc1);
	for(auto& i:vc2){
		std::cout << i << " ";
	}
}

swap：交换两个对象的值
template <class T> void swap ( T& a, T& b )
{
  T c(a); a=b; b=c;
}

transform：处理指定范围的值
void test_transform() {
	std::vector<int> vc = {1, 3, 3, 15, 15, 8};
	std::vector<int> vc2;
	vc2.resize(vc.size());
	
	std::transform(vc.begin(), vc.end(), vc2.begin(), [](int &i) {
			return i*2;
		});
	for(auto& i:vc2){
		std::cout << i << " ";
	}
	std::cout << std::endl;
}

replace：替换指定范围内的值
void test_replace() {
	std::vector<int> vc = {1, 3, 3, 15, 15, 8};

	
	std::replace(vc.begin(), vc.end(), 3, 20);
	for(auto& i:vc){
		std::cout << i << " ";
	}
	std::cout << std::endl;
}

fill：用值填充
void test_fill() {
	std::vector<int> vc = {1, 3, 3, 15, 15, 8};

	
	std::fill(vc.begin(), vc.begin()+3, 100);
	for(auto& i:vc){
		std::cout << i << " ";
	}
	std::cout << std::endl;
}


generate：生成
void test_generate() {
	std::srand(unsigned(std::time(0)));
	std::vector<int> vc;
	vc.resize(5);
	
	std::generate(vc.begin(), vc.end(), [](){
			return (std::rand()%10);
		});
	for(auto& i:vc){
		std::cout << i << " ";
	}
	std::cout << std::endl;	
}

remove：将指定范围的数值移除，需要修改索引
void test_remove() {
	std::vector<int> vc = {1, 3, 3, 15, 15, 8};

	
	auto it = std::remove(vc.begin(), vc.end(), 3);
	for(auto& i:vc){
		std::cout << i << " ";
	}
	std::cout << std::endl;
	vc.erase(it, vc.end());	// 需要删除后面的索引 
	for(auto& i:vc){
		std::cout << i << " ";
	}
}


unique：删除重复值
void test_unique() {
	std::vector<int> vc = {1, 3, 3, 15, 15, 8};
	auto it = std::unique(vc.begin(), vc.end());
	
	vc.erase(it, vc.end());
	for(auto& i:vc){
		std::cout << i << " ";
	}
} 

reverse：指定范围反转
void test_reverse() {
	std::vector<int> vc = {1, 3, 2, 9, 15, 8};
	std::reverse(vc.begin(), vc.end());
	
	for(auto& i:vc){
		std::cout << i << " ";
	}
} 

rotate：将指定范围旋转
void test_rotate() {
	std::vector<int> vc = {1, 3, 2, 9, 15, 8};
	
	// 开头到第二个开始旋转	
	std::rotate(vc.begin(), vc.begin()+2, vc.end());
		
	for(auto& i:vc){
		std::cout << i << " ";
	}
}

random_shuffle：随机打乱
void test_random_shuffle() {
	std::vector<int> vc = {1, 3, 2, 9, 15, 8};
	
	std::random_shuffle(vc.begin(), vc.end());
		
	for(auto& i:vc){
		std::cout << i << " ";
	}
}

sort：排序
void test_sort() {
	std::vector<int> vc = {1, 3, 2, 9, 15, 8};
	
	std::sort(vc.begin(), vc.end());
		
	for(auto& i:vc){
		std::cout << i << " ";
	}
}


merge：合并两个有序的列表
void test_merge() {
	std::vector<int> vc = {1, 3, 2, 9, 15, 8};
	std::vector<int> vc2 = {1, 6, 2, 9, 14, 8};
	std::vector<int> vc1;
	vc1.resize(vc.size() + vc2.size());
	std::sort(vc.begin(), vc.end());
	std::sort(vc2.begin(), vc2.end());
	std::merge(vc.begin(), vc.end(), vc2.begin(), vc2.end(), vc1.begin());
	for(auto& i:vc1){
		std::cout << i << " ";
	}
}

includes：是否包含序列

void test_includes() {
	std::vector<int> vc = {1, 3, 2, 9, 15, 8};
	std::vector<int> vc2 = {1, 3, 2};

	bool rt = std::includes(vc.begin(), vc.end(), vc2.begin(), vc2.end());
	std::cout << "vc是否包含vc2" << rt << std::endl;
}


set_union：求两个序列的并集
void test_set_union() {
	std::vector<int> vc = {1, 3, 2, 9, 15, 8};
	std::vector<int> vc2 = {1, 3, 2, 19, 11, 20};
	std::vector<int> vc1;
	vc1.resize(vc.size() + vc2.size());
	
	auto rt = std::set_union(vc.begin(), vc.end(), vc2.begin(), vc2.end(), vc1.begin());
	vc1.resize(rt-vc1.begin());
	
	for(auto& i:vc1){
		std::cout << i << " ";
	}
}

set_intersection：求两个集合的交集
void test_set_intersection () {
	std::vector<int> vc = {1, 3, 2, 9, 15, 8};
	std::vector<int> vc2 = {1, 3, 2, 19, 11, 20};
	std::vector<int> vc1;
	vc1.resize(vc.size() + vc2.size());
	
	auto rt = std::set_intersection (vc.begin(), vc.end(), vc2.begin(), vc2.end(), vc1.begin());
	vc1.resize(rt-vc1.begin());
	
	for(auto& i:vc1){
		std::cout << i << " ";
	}
}

set_difference：求两个序列的差异
void test_set_difference(){
	std::vector<int> vc = {1, 3, 2, 9, 15, 8};
	std::vector<int> vc2 = {1, 3, 2, 19, 11, 20};
	std::vector<int> vc1;
	vc1.resize(vc.size() + vc2.size());
	
	auto rt = std::set_difference(vc.begin(), vc.end(), vc2.begin(), vc2.end(), vc1.begin());
	vc1.resize(rt-vc1.begin());
	
	for(auto& i:vc1){
		std::cout << i << " ";
	}
}

push_heap：将元素推入堆范围
void test_heap(){
	std::vector<int> vc = {1, 3, 2, 9, 15, 8};
	
	std::make_heap(vc.begin(), vc.end());
	std::cout << "heap top：" << vc.front() << std::endl;

	std::pop_heap(vc.begin(), vc.end());
	vc.pop_back();
	std::cout << "pop after, heap top：" << vc.front() << std::endl;

	
	vc.push_back(300);
	std::push_heap(vc.begin(), vc.end());
	std::cout << "add after, heap top：" << vc.front() << std::endl;
	
	for(auto& i:vc) {
		std::cout << i << " ";
	}
}


max、min：判断最大或最小
void test_min_max() {
	std::cout << "min: " << std::min(4, 1) << std::endl;
	std::cout << "max: " << std::max(4, 1) << std::endl;
}

minmax_element：获取序列中的最大最小元素
void test_minmax_element() {
	std::vector<int> vc = {1, 3, 2, 9, 15, 8};
	auto rt = std::minmax_element(vc.begin(), vc.end());
	
	std::cout << *rt.first << ", " << *rt.second << std::endl;
}

next_permutation：全排列
void test_next_permutation() {
	std::vector<int> vc = {1, 3, 2};
	std::sort(vc.begin(), vc.end());
	std::cout << "全排列\n"; 
	do {
    	std::cout << vc[0] << ' ' << vc[1] << ' ' << vc[2] << '\n';
  	} while ( std::next_permutation(vc.begin(), vc.end()));
}
// 123
// 132
// 213
// 231
// 312
// 321
```