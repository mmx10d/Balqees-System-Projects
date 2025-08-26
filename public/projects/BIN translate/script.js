let resultElement = document.getElementById("result");
let inp = document.getElementById("input");
inp.focus();
inp.onkeyup= () =>{
    autoConvert();
};
document.getElementById('copy_btn').onclick = () => {
    navigator.clipboard.writeText(resultElement.innerText);
};
function autoConvert() {
    let input = document.getElementById("input").value.trim();

    if (!input) {
        resultElement.innerText = "يرجى إدخال نص أو شيفرة.";
        return;
    }

    // التحقق مما إذا كان المُدخل عبارة عن أرقام ثنائية فقط (0 و 1 ومسافات)
    let binaryRegex = /^[01\s]+$/;

    if (binaryRegex.test(input)) {
        // المُدخل عبارة عن شيفرة ثنائية
        let binaryStr = input.replace(/\s+/g, ' ').trim();
        let binaryArray = binaryStr.split(" ");

        // إذا لم يكن هناك فراغات وكان الطول أكبر من 8، نقسم النص إلى مجموعات من 8 خانات
        if (binaryArray.length === 1 && binaryArray[0].length > 8) {
            binaryArray = [];
            for (let i = 0; i < input.length; i += 8) {
                binaryArray.push(input.slice(i, i + 8));
            }
        }

        let text = "";
        for (let i = 0; i < binaryArray.length; i++) {
            if (binaryArray[i].length !== 8) {
                resultElement.innerText = "خطأ: يجب أن يتكون كل بايت من 8 أرقام.";
                return;
            }
            text += String.fromCharCode(parseInt(binaryArray[i], 2));
        }
        resultElement.innerText = text;
    } else {
        // المُدخل نص عادي، نقوم بتحويله إلى نظام ثنائي
        let binaryResult = "";
        for (let i = 0; i < input.length; i++) {
            let bin = input.charCodeAt(i).toString(2);
            binaryResult += ("00000000" + bin).slice(-8) + " ";
        }
        resultElement.innerText = binaryResult.trim();
    }
}