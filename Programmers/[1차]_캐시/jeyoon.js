function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];
  // 캐싱이 불가능한 경우의 예외처리
  if (cacheSize === 0) return cities.length * 5;
  cities.forEach((city) => {
    const lowerCity = city.toLowerCase();
    const ret = cache.indexOf(lowerCity);
    // cache miss
    if (ret === -1) {
      cache.length >= cacheSize && cache.shift();
      cache.push(lowerCity);
      answer += 5;
      return;
    }
    // cache hit
    cache = cache.slice(0, ret).concat(cache.slice(ret + 1)); // ret을 제외한 나머지 원소들을 합쳐서 새로운 cache를 만들기!
    // cache.splice(ret, 1); // ret에 해당하는 원소 하나만 지우기!
    cache.push(lowerCity);
    answer++;
  });
  return answer;
}
