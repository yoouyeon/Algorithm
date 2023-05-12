# a [symbol] b 에 대한 식이 맞는지 확인
def is_correct(a, b, symbol):
    if symbol == '<':
        return a < b
    return a > b


def brute_force(cnt, result):
    # 함수 내에서 전역변수 참조 및 수정
    global N, symbol, answer, choose

    # 재귀 종료 조건
    if N == cnt: 
        if answer is None: # max값이라면 출력
            print(''.join(map(str, result)))
        answer = ''.join(map(str, result))
        return

    # 가장 큰 수인 9부터 0까지 값을 차례대로 대입해보기
    for i in reversed(range(10)):
        # 이미 사용된 값인지 확인
        if choose[i] is True:
            continue
        # 식을 만족하는지 확인(비교할 숫자가 없는 경우는 제외)
        if result and is_correct(result[-1], i, symbol[cnt]) is False:
            continue
        
        # 값 선택
        result.append(i)
        choose[i] = True
        
        # 재귀
        brute_force(cnt + 1, choose, result)
        
        # 이후 재사용하는 값들 원상복구
        result.pop()
        choose[i] = False



N = int(input())
symbol = input().split()
choose = [False] * 10 # index에 해당하는 수를 사용했는지 확인하는 배열
answer = None         # min 값을 담아줄 변수
brute_force(-1, choose, [])
print(answer)
