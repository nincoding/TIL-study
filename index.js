function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // 피봇이 항상 첫 번째 요소라고 가정
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // 위에서 정의한 헬퍼 함수 사용
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));