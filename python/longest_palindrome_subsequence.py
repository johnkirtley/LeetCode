def longest_palindrome(string):
    longest = ""

    for i in range(len(string)):
        for j in range(i, len(string)):
            substring = string[i: j + 1]

            if len(substring) > len(longest) and isPalindrome(substring):
                longest = substring

    return longest


def isPalindrome(string):
    left = 0
    right = len(string) - 1

    while left < right:
        if string[left] != string[right]:
            return False
        left += 1
        right -= 1

    return True


print(longest_palindrome("abaxyzzyxf"))
