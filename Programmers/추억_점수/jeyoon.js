function solution(name, yearning, photo) {
  let answer = [];
  const yearningMap = new Map();
  for (let i = 0; i < name.length; i++) {
    yearningMap.set(name[i], yearning[i]);
  }
  photo.forEach((people) => {
    const totalScore = people.reduce((acc, curr, idx) => {
      const score = yearningMap.get(people[idx])
        ? yearningMap.get(people[idx])
        : 0;
      return acc + score;
    }, 0);
    answer.push(totalScore);
  });
  return answer;
}
