
/* TODO: 
* learn how the lib works
  *  figure out how to format the pdf and add padding
*/
function downloadPDF() {
    // probably build own ontop of this one
    const doc = new jspdf();
    doc.text('Hello world!', 10, 10);
    doc.save('a4.pdf');
}

function exportAsPDF(div_id = 'diid') {
    // parentdiv is the html element which has to be converted to PDF
    html2canvas(document.querySelector('#parentdiv')).then((canvas) => {
        var pdf = new jspdf('p', 'pt', [canvas.width, canvas.height]);

        var imgData = canvas.toDataURL('image/jpeg', 1.0);
        pdf.addImage(imgData, 0, 0, canvas.width, canvas.height);
        pdf.save('converteddoc.pdf');
    });
}

// happy with this one

function generatePDF() {
    html2canvas(document.getElementById('parentdiv')).then((canvas) => {
        const imgWidth = 208;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jspdf('p', 'mm', 'a4');
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('skill-set.pdf');
    });
}