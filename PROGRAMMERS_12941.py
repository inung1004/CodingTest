def solution(A, B):
    answer = 0
    sorted_A = sorted(A)
    sorted_B = sorted(B, reverse=True)

    for _ in range(len(A)):
        min_A = sorted_A.pop(0)
        max_B = sorted_B.pop(0)
        answer += min_A * max_B

    return answer