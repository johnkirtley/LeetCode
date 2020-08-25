def two_sum(arr, target):

    # Create hash table to store values and indexes
    # Allows for quick lookups
    num_tracker = {}

    # Add every value in arr to the hash table.
    for index, val in enumerate(arr):
        num_tracker[val] = index

    for val in arr:
        # Find the difference between target and current value
        difference = target - val

        # Check hash table to see if difference exists
        if difference in num_tracker:

            # Return two sum indexes if difference and current value indexes differ
            if num_tracker[difference] != arr.index(val):
                return [num_tracker[difference], arr.index(val)]

    # Return empty array if solution doesn't exist
    return []


arr = [3, 3]
target = 6

if two_sum(arr, target) == [1, 0]:
    print('Pass')
else:
    print('Fail')
