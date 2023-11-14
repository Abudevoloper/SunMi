import html2pdf from "html2pdf.js/src";

window.onload = function () {
    document.getElementById("download2").addEventListener("click", () => {
        const myPage = this.document.getElementById("myPage");
        console.log(myPage);
        console.log(window)
        var opt = {
            filename: '완제품 출고의뢰서.pdf',
            jsPDF: {unit: 'pt', format: 'ledger', orientation: 'l'}

        };

        html2pdf().from(myPage).set(opt).save();

    })

}