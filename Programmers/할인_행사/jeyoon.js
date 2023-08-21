function solution(want, number, discount) {
  let answer = 0;
  const shoppingMemo = {};
  const cart = {};
  for (let i = 0; i < want.length; i++) {
    shoppingMemo[want[i]] = number[i];
    cart[want[i]] = 0;
  }
  // 초기화
  for (let i = 0; i < 10; i++) {
    if (cart[discount[i]]) cart[discount[i]]++;
    else cart[discount[i]] = 1;
  }
  for (let i = 0; i < discount.length - 9; i++) {
    if (i !== 0) {
      cart[discount[i - 1]]--;
      if (cart[discount[i + 9]]) cart[discount[i + 9]]++;
      else cart[discount[i + 9]] = 1;
    }
    // cart의 항목과 shoppingMemo의 항목이 동일한지 확인하기
    let isAnswer = true;
    for (item in cart) {
      if (cart[item] === 0) continue;
      if (cart[item] !== shoppingMemo[item]) {
        isAnswer = false;
        break;
      }
    }
    if (isAnswer) answer++;
  }
  return answer;
}
