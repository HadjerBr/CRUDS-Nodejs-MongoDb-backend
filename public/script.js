
function getTutar1() {
    var tablo1 = document.getElementById("table1");
    let total1 = 0;
    let stutar = 0;
    let gidtutar = 0;
    let giytutar = 0;
    let ktutar = 0;
    let etutar = 0;
    
    for (let i = 0; i < tablo1.rows.length-1; i++) {
      let cell = tablo1.rows[i].querySelector(".tutar input");
      let turCell = tablo1.rows[i].querySelector(".tur select");
  
      if (cell) {
        let cellValue = parseFloat(cell.value);
        if (!isNaN(cellValue)) {
          total1 += cellValue;
          if (turCell) {
            let turCellValue = turCell.value;
            if (turCellValue) {
                if (turCellValue === "saglik") {
                    stutar+=cellValue;
                } else if (turCellValue === "gida") {
                    gidtutar+=cellValue;
                } else if (turCellValue === "giyim") {
                    giytutar+=cellValue;
                } else if (turCellValue === "kira") {
                    ktutar+=cellValue;
                } else if (turCellValue === "egitim") {
                    etutar+=cellValue;
                }
                
            }
            
        }
        }
        
  
      }
    }
    document.getElementById("toplam1").textContent = total1.toFixed(2);
    document.getElementById("stutar").textContent = stutar.toFixed(2);
    document.getElementById("gidtutar").textContent = gidtutar.toFixed(2);
    document.getElementById("giytutar").textContent = giytutar.toFixed(2);
    document.getElementById("ktutar").textContent = ktutar.toFixed(2);
    document.getElementById("etutar").textContent = etutar.toFixed(2);
  }
  
  function getTutar2() {
    // var tablo2 = document.getElementById("table2");
    let total2 = 0;
    let stutar = 0;
    let gidtutar = 0;
    let giytutar = 0;
    let ktutar = 0;
    let etutar = 0;
    
    for (let i = 0; i < tablo2.rows.length-1; i++) {
      let cell = tablo2.rows[i].querySelector(".tutar input");
      let turCell = tablo2.rows[i].querySelector(".tur select");
  
      if (cell) {
        let cellValue = parseFloat(cell.value);
        if (!isNaN(cellValue)) {
          total2 += cellValue;
          if (turCell) {
            let turCellValue = turCell.value;
            if (turCellValue) {
                if (turCellValue === "saglik") {
                    stutar+=cellValue;
                } else if (turCellValue === "gida") {
                    gidtutar+=cellValue;
                } else if (turCellValue === "giyim") {
                    giytutar+=cellValue;
                } else if (turCellValue === "kira") {
                    ktutar+=cellValue;
                }
                else if (turCellValue === "egitim") {
                    etutar+=cellValue;
                }
            }
            
        }
        }
      }
    }
    document.getElementById("toplam2").textContent = total2.toFixed(2);
    document.getElementById("stutar").textContent = stutar.toFixed(2);
    document.getElementById("gidtutar").textContent = gidtutar.toFixed(2);
    document.getElementById("giytutar").textContent = giytutar.toFixed(2);
    document.getElementById("ktutar").textContent = ktutar.toFixed(2);
    document.getElementById("etutar").textContent = etutar.toFixed(2);
  }
  
  
  function genelToplam() {
    
    let total = 0;
    let toplam1 = parseFloat(document.querySelector(".toplam1").textContent) || 0;
    let toplam2 = parseFloat(document.querySelector(".toplam2").textContent) || 0;
    total = toplam1 + toplam2;
    document.getElementById("toplamtutar").textContent = total.toFixed(2);
    countingTur();
  }
  
  genelToplam();
  
  
  function countingTur() {
    var tablo1 = document.getElementById("table1");
    var tablo2 = document.getElementById("table2");
    let saglik = 0;
    let gida = 0;
    let giyim = 0;
    let kira = 0;
    let egitim = 0;
    let adet = 0;
    let stutar = 0;
    let gidtutar = 0;
    let giytutar = 0;
    let ktutar = 0;
    let etutar = 0;
  
    for (let i = 0; i < tablo1.rows.length - 1; i++) {
      let cell = tablo1.rows[i].querySelector(".tur select");
      let tutarCell = tablo1.rows[i].querySelector(".tutar input");
  
      if (cell) {
        let cellValue = cell.value;
        if (cellValue === "saglik") {
          saglik++;
          if (tutarCell) {
            let tutarCellValue = parseFloat(tutarCell.value);
            if (!isNaN(tutarCellValue)) {
              stutar += tutarCellValue;
            }
          }
        } else if (cellValue === "gida") {
          gida++;
          if (tutarCell) {
            let tutarCellValue = parseFloat(tutarCell.value);
            if (!isNaN(tutarCellValue)) {
              gidtutar += tutarCellValue;
            }
          }
        } else if (cellValue === "giyim") {
          giyim++;
          if (tutarCell) {
            let tutarCellValue = parseFloat(tutarCell.value);
            if (!isNaN(tutarCellValue)) {
              giytutar += tutarCellValue;
            }
          }
        } else if (cellValue === "kira") {
          kira++;
          if (tutarCell) {
            let tutarCellValue = parseFloat(tutarCell.value);
            if (!isNaN(tutarCellValue)) {
              ktutar += tutarCellValue;
            }
          }
        } else if (cellValue === "egitim") {
            egitim++;
            if (tutarCell) {
              let tutarCellValue = parseFloat(tutarCell.value);
              if (!isNaN(tutarCellValue)) {
                etutar += tutarCellValue;
              }
            }
          }
      }
    }
  
    for (let i = 0; i < tablo2.rows.length - 1; i++) {
      let cell = tablo2.rows[i].querySelector(".tur select");
      let tutarCell = tablo2.rows[i].querySelector(".tutar input");
  
      if (cell) {
        let cellValue = cell.value;
        if (cellValue === "saglik") {
          saglik++;
          if (tutarCell) {
            let tutarCellValue = parseFloat(tutarCell.value);
            if (!isNaN(tutarCellValue)) {
              stutar += tutarCellValue;
            }
          }
        } else if (cellValue === "gida") {
          gida++;
          if (tutarCell) {
            let tutarCellValue = parseFloat(tutarCell.value);
            if (!isNaN(tutarCellValue)) {
              gidtutar += tutarCellValue;
            }
          }
        } else if (cellValue === "giyim") {
          giyim++;
          if (tutarCell) {
            let tutarCellValue = parseFloat(tutarCell.value);
            if (!isNaN(tutarCellValue)) {
              giytutar += tutarCellValue;
            }
          }
        } else if (cellValue === "kira") {
          kira++;
          if (tutarCell) {
            let tutarCellValue = parseFloat(tutarCell.value);
            if (!isNaN(tutarCellValue)) {
              ktutar += tutarCellValue;
            }
          }
        } else if (cellValue === "egitim") {
            egitim++;
            if (tutarCell) {
              let tutarCellValue = parseFloat(tutarCell.value);
              if (!isNaN(tutarCellValue)) {
                etutar += tutarCellValue;
              }
            }
          }
      }
    }
  
    adet = saglik + gida + giyim + kira;
    document.getElementById("toplamS").textContent = saglik;
    document.getElementById("toplamGid").textContent = gida;
    document.getElementById("toplamGiy").textContent = giyim;
    document.getElementById("toplamK").textContent = kira;
    document.getElementById("toplamE").textContent = egitim;
    document.getElementById("toplamAdet").textContent = adet;
    document.getElementById("stutar").textContent = stutar.toFixed(2);
    document.getElementById("gidtutar").textContent = gidtutar.toFixed(2);
    document.getElementById("giytutar").textContent = giytutar.toFixed(2);
    document.getElementById("ktutar").textContent = ktutar.toFixed(2);
    document.getElementById("etutar").textContent = etutar.toFixed(2);
  }
  
  countingTur();
  
  const tablo1 = document.getElementById("table1");
  tablo1.addEventListener("input", getTutar1);
  tablo1.addEventListener("input", countingTur);
  tablo1.addEventListener("input", genelToplam);
  
  const tablo2 = document.getElementById("table2");
  tablo2.addEventListener("input", getTutar2);
  tablo2.addEventListener("input", countingTur);
  tablo2.addEventListener("input", genelToplam);
  
  
  function printReceipt() {
    window.print();
  }

  
let addRow = document.getElementById("addRow");

// addRow.onclick = () => {
//   tablo2.insertRow(0);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);

//   // Add some text to the new cells:
//   cell1.innerHTML = "NEW CELL1";
//   cell2.innerHTML = "NEW CELL2"; 
  
// }
  
