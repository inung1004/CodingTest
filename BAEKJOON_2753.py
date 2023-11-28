a = int(input())
result = 0
if a%4==0:
    if(a%400==0):
        result = 1  
    elif a%100!=0:
        result = 1
print(result)