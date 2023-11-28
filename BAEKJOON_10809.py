word = input()
l = [-1]*26
for i in range(len(word)):
    l[ord(word[i])-97] = word.index(word[i])
for i in range(len(l)):
    print(l[i], end=" ")