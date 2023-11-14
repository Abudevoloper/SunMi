import html2pdf from "html2pdf.js/src";
window.onload = function () {
    document.getElementById("download") .addEventListener("click", () => {
        const history = this.document.getElementById("openHistory");

        console.log(history);
        console.log(window);
        var opt = {
            filename: '자량점검내용.pdf',
            html2canvas: {scale:1},
            jsPDF: {unit: 'pt', format: 'ledger', orientation: 'l',}
        };

        html2pdf().from(history).set(opt).save();
    })
}