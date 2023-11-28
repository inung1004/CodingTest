n = int(input())
for _ in range(n):
    reps, word = input().split() 
    reps = int(reps)
    for i in range(len(word)):
        print(word[i]*reps, end="") 
    print("")