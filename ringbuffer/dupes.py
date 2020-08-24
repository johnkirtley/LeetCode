import time

names = ['john', 'jacob', 'jackie', 'john', 'jordan', 'mom', 'dad']
names2 = ['hello', 'jac2ob', 'jackie', 'hi', 'jordan', 'hola', 'howru', 'dad']
dupes2 = []


hash_table = {}
start = time.time()
for name in names:
    hash_table[name] = name

dupes = [n for n in names2 if hash_table.get(n)]


print(dupes)
end = time.time()

print(f'Hash: {end - start}')

start2 = time.time()
for name1 in names:
    for name2 in names2:
        if name1 == name2:
            dupes2.append(name2)
print(dupes2)
end2 = time.time()

print(f'Nested Loops: {end2 - start2}')

dupes = []
dupes2 = []
