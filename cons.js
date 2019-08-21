const data = require('./data')
var xl = require('excel4node');


function cons() {
    
    var wb = new xl.Workbook();
    var ws = wb.addWorksheet('Sheet 1');

    var style = wb.createStyle({
        font: {
          color: 'black',
          size: 12,                   
        },     
        numberFormat: '$#,##0.00; ($#,##0.00); -'
      });

    var style2 = wb.createStyle({
        font: {
          color: '#008000',
          size: 12,
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -',
      });

    var style3 = wb.createStyle({
        font: {
          color: '#FF0000',
          size: 12,
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -',
      });
      
      var style4 = wb.createStyle({
        font: {
          color: '#2196F3',
          size: 12,
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -',
      });

    ws.cell(1, 1)
        .string("test")
        .style(style);

    wb.write('Excel.xlsx');

    ws.cell(1, 1)
    .string('SMSF Name:')
    .style(style);

    ws.cell(1, 2)
    .string(document.getElementById('smsfName').value)
    .style(style);

    ws.cell(2, 1)
    .string('SMSF ABN:')
    .style(style);

    ws.cell(2, 2)
    .string(document.getElementById('smsfAbn').value)
    .style(style);

    ws.cell(3, 1)
    .string('Audit Year:')
    .style(style);

    ws.cell(3, 2)
    .string(document.getElementById('smsfYear').value)
    .style(style);

    let temp = []

    for (let i = 0; i < data.length; i++) {
        if(document.getElementById(i+'yes').checked){
            ws.cell(i+3, 1)
            .string(data[i])
            .style(style4);
        
            ws.cell(i+3, 2)
            .string('YES')
            .style(style2);

        } else if (document.getElementById(i+'no').checked){
            ws.cell(i+3, 1)
            .string(data[i])
            .style(style4);
        
            ws.cell(i+3, 2)
            .string('NO')
            .style(style3);
        } else {
            ws.cell(i+3, 1)
            .string(data[i])
            .style(style4);
        
            ws.cell(i+3, 2)
            .string('N/A')
            .style(style);
        }
    }

    wb.write(document.getElementById('smsfName').value+' '+document.getElementById('smsfYear').value+'_audit_checklist.xlsx');
    alert("Excel Checklist Created in "+__dirname)

}

function create() {
    for (let i = 0; i < data.length; i++) {

        let par = document.createElement("p");
        document.getElementById("div").appendChild(par);

        let label = document.createElement("label");
        let text = document.createTextNode(data[i]);
        label.setAttribute("style","color:#2196F3; font-size:18px")
        label.setAttribute("for", i+'yes');     
        label.appendChild(text);

        document.getElementById("div").insertBefore(label, document.getElementById(i+'yes'));

        let br = document.createElement("br");
        document.getElementById("div").insertBefore(br, document.getElementById(i+'yes'));
        
        let checkbox1 = document.createElement("input");
        checkbox1.setAttribute("type", "checkbox");
        checkbox1.setAttribute("id", i+'yes');
        checkbox1.setAttribute("style","top: 0;left: 0;height: 20px;width: 20px;background-color: #eee;")
        document.getElementById("div").appendChild(checkbox1);

        let yes = document.createElement("label");
        let textYes = document.createTextNode(" Yes ");
        yes.setAttribute("for", i+'yes'); 
        yes.appendChild(textYes);
        document.getElementById("div").insertBefore(yes, document.getElementById(i+'yes'));

        let checkbox2 = document.createElement("input");
        checkbox2.setAttribute("type", "checkbox");
        checkbox2.setAttribute("id", i+'no');
        checkbox2.setAttribute("style","top: 0;left: 0;height: 20px;width: 20px;background-color: #eee;")
        document.getElementById("div").appendChild(checkbox2);      

        let no = document.createElement("label");
        let textNo = document.createTextNode(" No  ");
        no.setAttribute("for", i+'no');
        no.appendChild(textNo);
        document.getElementById("div").insertBefore(no, document.getElementById(i+'no'));

        let checkbox3 = document.createElement("input");
        checkbox3.setAttribute("type", "checkbox");
        checkbox3.setAttribute("id", i+'na');
        checkbox3.setAttribute("style","top: 0;left: 0;height: 20px;width: 20px;background-color: #eee;")
        document.getElementById("div").appendChild(checkbox3);

        let na = document.createElement("label");
        let textNa = document.createTextNode(" N/A  ");
        na.setAttribute("for", i+'na');
        na.appendChild(textNa);
        document.getElementById("div").insertBefore(na, document.getElementById(i+'na'));

        let hd = document.createElement("input");
        hd.setAttribute("type", "hidden");
        hd.setAttribute("id", i+'hidden');
        document.getElementById("div").appendChild(hd);

    }
}