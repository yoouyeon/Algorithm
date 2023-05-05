S = input()
split_list = S.replace('>', '>,').replace('<', ',<').split(',')
for ss in split_list:
    if ss and ss[0] == '<':
        print(ss, end='')
    else:
        print(' '.join(rstr[::-1] for rstr in ss.split()), end='')