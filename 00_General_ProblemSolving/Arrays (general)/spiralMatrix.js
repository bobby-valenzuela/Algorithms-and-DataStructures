function spiralMatrix(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let value = 1;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        // Fill top row
        for (let i = left; i <= right; i++) {
            matrix[top][i] = value++;
        }
        top++;

        // Fill right column
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = value++;
        }
        right--;

        // Fill bottom row
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = value++;
        }
        bottom--;

        // Fill left column
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = value++;
        }
        left++;
    }

    return matrix;
}

// Example Usage:
console.log(spiralMatrix(15));

// OUTPUT
// [  [ 1, 2, 3, 4 ],
//   [ 12, 13, 14, 5 ],
//   [ 11, 16, 15, 6 ],
//   [ 10, 9, 8, 7 ]
// ]

