def rotate_list(arr):
    return list(zip(*arr[::-1]))


arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(rotate_list(arr))
