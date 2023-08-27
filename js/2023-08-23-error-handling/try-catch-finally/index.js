// library

try {
  console.log(user);
} catch (err) {
  console.log(err.message);
}

console.log("Hello");

function uploadFile(path) {
  if (!path.includes("https")) {
    throw new Error("Bizim kütüphanemizde sadece https protokolü geçer...");
  }

  return "success";
}

try {
  uploadFile("http://dada.com/dada.png");
} catch (err) {
  console.log(err.message);
}finally{
    //clear loading spinner
}
