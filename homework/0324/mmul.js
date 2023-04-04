function mmul(a,b)
{
    let r = []
    for (let i=1;i<=a.length;i++)
    {
        r[i-1] = []
        for (let j=1;j<=a[i-1].length;j++)
        {
            r[i-1][j-1] = a[i-1][j-1]*b[i-1][j-1]+a[i][j]-1*b[i][j-1]
        }
    }
    return r

}

let v1=[[1,1],[1,1]], v2=[[2,3],[4,5]]

console.log(mmul(v1,v2))