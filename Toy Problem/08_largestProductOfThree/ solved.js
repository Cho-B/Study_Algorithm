// 08_largestProductOfThree

// largestProductOfThree
// 문제
// 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 임의의 배열
// 출력
// number 타입을 리턴해야 합니다.
// 주의사항
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// 배열의 요소는 음수와 0을 포함하는 정수입니다.
// 배열의 길이는 3 이상입니다.
// 입출력 예시
// let output = largestProductOfThree([2, 1, 3, 7]);
// console.log(output); // --> 42 (= 2 * 3 * 7)

// output = largestProductOfThree([-1, 2, -5, 7]);
// console.log(output); // --> 35 (= -1 * -5 * 7)

const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 값이 음수가 되는 것들 제외
  // sort로 정렬해주면 음수가 앞이나 뒤로 모임
  // 음수2 양수1 일 경우, 모두 양수 일 경우 비교
  let arrsort = arr.slice().sort((a, b) => a - b);
  // 모든 수가 양수일 경우
  let positiveNum =
    arrsort[arr.length - 1] * arrsort[arr.length - 2] * arrsort[arr.length - 3];
  // 앞의 두 요소가 음수일 경우
  let negativeNum = arrsort[0] * arrsort[1] * arrsort[arr.length - 1];
  return Math.max(positiveNum, negativeNum);
};
