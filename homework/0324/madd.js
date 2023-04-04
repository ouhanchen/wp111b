function madd(a,b)
{
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

let v1=[[1,2],[4,5]], v2=[[1,1],[1,1]]

console.log(madd(v1,v2))