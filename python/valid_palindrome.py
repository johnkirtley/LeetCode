
def valid_palindrome(str):

    left, right = 0, len(str) - 1

    while left < right:

        if not str[left].isalnum():
            left += 1
        elif not str[right].isalnum():
            right -= 1
        else:
            if str[left].lower() != str[right].lower():
                print('False')
                return False
            else:
                left += 1
                right -= 1
    print('True')
    return True


test = "A man, a plan, a canal: Panama"
valid_palindrome(test)
