def Merge(dict1, dict2):
    """
    合并两个字典，返回一个新字典。

    参数：
    dict1：字典，要合并的第一个字典。
    dict2：字典，要合并的第二个字典。

    返回值：
    一个新字典，包含 dict1 和 dict2 中的所有键值对。
    如果两个字典中有相同的键，则 dict2 中的值会覆盖 dict1 中的值。
    """
    # 使用 ** 运算符合并两个字典 dict1 和 dict2
    # ** 运算符用于解包字典，字典结构运算符

    res = {**dict1, **dict2}
    return res


# js 对象字面量  => python 字典 key:value 键值对
dict1 = {"name": "甘12", "age": 20}
dict2 = {"name": "人机", "city": "南昌"}
dict3 = Merge(dict1, dict2)
print(dict3)