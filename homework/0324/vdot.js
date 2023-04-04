function vdot(a,b)
{
    let r = 0
    for (let i=0;i<a.length;i++)
    {
        r = r + (a[i] * b[i])
    }
    return r
}

let v1=[2,1], v2=[1,3]
console.log('v1+v2=',vdot(v1,v2))