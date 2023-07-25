const endoced = Buffer.from("mpilopillz").toString('base64')

console.log("encoded-->", endoced);
console.log("bXBpbG9waWxseg==" === endoced);