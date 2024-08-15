function generatePassword() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const special = document.getElementById("special").checked;
  
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
    let charset = "";
    if (uppercase) charset += uppercaseChars;
    if (lowercase) charset += lowercaseChars;
    if (numbers) charset += numberChars;
    if (special) charset += specialChars;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
  
    document.getElementById("password").value = password;
  }
  