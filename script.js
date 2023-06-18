const form = document.getElementById("form")
const input = document.getElementById("password")
const inpuResult = document.getElementById("input-result");

async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }

form.addEventListener("submit", async (e)=>{
    e.preventDefault()
    let passwordToRegenerate = input.value;
    let hashed = await hash(passwordToRegenerate);
    
    inpuResult.value = hashed

})