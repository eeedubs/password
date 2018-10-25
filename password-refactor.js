// Need to take a password from a user, entered after "node application".
// Will take the third spot of the array.

var password = process.argv[2];
var output = obfuscate(password);
function obfuscate(password){
  var array = [];
  for (var x = 0; x < password.length; x++){
    switch (true) {
      case password.charAt(x) === "a":
        array.push("4");
        break;
      case password.charAt(x) === "e":
        array.push("3");
        break;
      case password.charAt(x) === "o":
        array.push("0");
        break
      case password.charAt(x) === "l":
        array.push("1");
      default:
        array.push(password.charAt(x));
      }
    }
  return array.join("");
}
console.log(output);

