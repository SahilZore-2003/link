const fileinput = document.getElementById("fileinput");
const dataurl = document.getElementById("dataurl");
const copybtn = document.getElementById("copybtn");
fileinput.addEventListener('change', e =>{
    const file = fileinput.files[0];
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        dataurl.value = reader.result;
        copybtn.addEventListener("click",()=>{
            navigator.clipboard.writeText(dataurl.value)
            .then(()=>{
                 copybtn.style.background = "green"
                 copybtn.style.color = "white"
            })
        })
    })
    reader.readAsDataURL(file)
})