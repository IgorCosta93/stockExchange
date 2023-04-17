import XLSX from "xlsx";
import { saveAs } from 'file-saver';

function s2ab(s){
    let buf = new ArrayBuffer(s.length);
    let view = new Uint8Array(buf);
    for(let i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0XFF;
    return buf;
}

function generateXLSX(config){
    let wb = XLSX.utils.book_new();
    wb.Props = {
        Title: config.title,
        Subject: config.subject,
        Author: "Sorocaps",
        CreatedDate: new Date()
    }
    wb.SheetNames.push(config.sheetName);
    let ws_data = config.data;
    
    let ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets[config.sheetName] = ws;

    ws["!merges"] = config.merge;
    ws["!cols"] = config.cols;

    let wbout = XLSX.write(wb, { bookType:'xlsx', type: 'binary' });

    saveAs(new Blob([s2ab(wbout)], { type:'application/octet-stream' }), config.fileName);
}

export default generateXLSX;