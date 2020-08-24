# Solution 1


# def remove_duplicates(arr):
#     val_tracker = {}

#     for num in arr:
#         if num not in arr:
#             val_tracker[num] = 1
#         else:
#             print('True')
#             return True
#     print('False')
#     return False

# Solution 2


def remove_duplicates(arr):
    unique = set(arr)

    if len(unique) != len(arr):
        print('True')
        return True
    else:
        print('False')
        return False


test_arr = [1, 1, 1, 1, 2, 3, 4, 5, 5, 5]
answer_arr = set(test_arr)
remove_duplicates(test_arr)
