function mmul(a, b) {

    const a_row = a.length;
    const a_col = a[0].length;
    const b_col = b[0].length;
    const result = new Array(a_row);
    
    for (let i = 0; i < a_row; i++) {
      result[i] = new Array(b_col);
      for (let j = 0; j < b_col; j++) {
        result[i][j] = 0;
        for (let k = 0; k < a_col; k++) {
          result[i][j] += a[i][k] * b[k][j];
        }
      }
    }
  
    return result;
  }

let v1=[[1,1],[1,1]], v2=[[2,3],[4,5]]

console.log(mmul(v1,v2))