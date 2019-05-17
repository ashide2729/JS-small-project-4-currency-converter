document.getElementById("output").style.visibility = "hidden";
document.getElementById("rupeeInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let rupee = e.target.value;
  document.getElementById("dollarsOutput").innerHTML = rupee / 70.56;
  document.getElementById("eurosOutput").innerHTML = rupee / 79.26;
  document.getElementById("yenOutput").innerHTML = rupee * 1.55;
});
