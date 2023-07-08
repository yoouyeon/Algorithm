function solution(citations) {
    let answer = 0;
    citations.sort((a, b) => b - a);
    for (let h = citations[0]; h >= 0; h--) {
        // const over = citations.findLastIndex((citation) => citation >= h) + 1;
        const underIdx = citations.findIndex((citation) => citation < h);
        const under = underIdx === -1 ? 0 : citations.length - underIdx;
        const over = citations.length - under;
        // if (over >= h && under <= h)
        //     return h;
        if (over >= h)
            return h;
    }
    return answer;
}