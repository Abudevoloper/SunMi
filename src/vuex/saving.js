import html2pdf from "html2pdf.js/src";

export default {
    name: "saving",
    action: {
        window: onload = function () {
            document.getElementById("download")
                .addEventListener("click", () => {
                    const history = document.getElementById("openHistory");
                    console.log(history);
                    var opt = {
                        filename: '자량점검내용.pdf',
                        html2canvas: {scale: 1},
                        jsPDF: {unit: 'pt', format: 'ledger', orientation: 'l',}
                    };

                    html2pdf().from(history).set(opt).save();
                })
        }
    }
}


