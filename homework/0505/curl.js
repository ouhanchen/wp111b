let url = Deno.args[0]
console.log('fetch page at : ',url)
const res = await fetch(url);
const data = await res.test();
console.log(data)