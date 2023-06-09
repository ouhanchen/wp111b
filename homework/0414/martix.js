class MatrixOperations {
    static madd(a, b) {
        let r = []
        for (let i=0;i<a.length;i++)
        {
            r[i] = []
            for (let j=0;j<a[i].length;j++)
            {
                r[i][j] = a[i][j]+b[i][j]
            }
        }
        return r
    }
    
    static mmul(a, b) {

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
  }
  
let v1=[[1,1],[1,1]], v2=[[2,3],[4,5]]

console.log('v1+v2=',MatrixOperations.madd(v1,v2))

console.log('v1*v2=',MatrixOperations.mmul(v1,v2))