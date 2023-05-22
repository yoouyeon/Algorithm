// Try 1 : 오름차순 정렬하여 푸는 방법 => 정확성 20점...
// function solution(people, limit) {
//     let answer = 0;
//     people.sort(); // 오름차순 정렬

//     // 실제로 배열에서 원소를 제거하는 방법
//     while(people.length) {
//         const heavy = people.pop(); // 배열의 마지막 원소 제거하고 그 원소 반환.
//         if (people.length && people.at(0) + heavy <= limit)
//                 people.shift(); // 배열의 첫번째 원소 제거
//         answer++;
//     }

//     return answer;
// }

// ===============================

// Try 2 : 내림차순 정렬하여 푸는 방법 (1) => 정확성 통과, 효율성 5점...
// function solution(people, limit) {
//     let answer = 0;
//     people.sort((a, b) => b - a); // 내림차순 정렬

//     // 실제로 배열에서 원소를 제거하는 방법
//     while(people.length) {
//         const heavy = people.shift(); // 배열의 첫번째 원소 제거하고 그 원소 반환.
//         if (people.length && people.at(-1) + heavy <= limit)
//                 people.pop(); // 배열의 마지막 원소 제거
//         answer++;
//     }

//     return answer;
// }

// ===============================

// Try 3 : 내람차순 정렬하여 푸는 방법 (2)
function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a); // 내림차순 정렬
  let heavy_idx = 0;
  let light_idx = people.length - 1;

  // 인덱스를 2개 사용하는 방법
  while (heavy_idx <= light_idx) {
    if (
      heavy_idx !== light_idx &&
      people[heavy_idx] + people[light_idx] <= limit
    )
      light_idx--;
    heavy_idx++;
    answer++;
  }

  return answer;
}
