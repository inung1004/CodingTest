def solution(s):
    answer = ''
    sArr = s.split(" ")
    max = int(sArr[0])
    min = int(sArr[0])
    for i in sArr:
        if(int(i)>max):
            max = int(i)
        if(int(i)<min):
            min = int(i)
    answer = str(min) +" "+ str(max)
    return answer