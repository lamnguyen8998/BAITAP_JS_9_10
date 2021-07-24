function NhanVien(
  txttknv, 
  txtname, 
  txtemail, 
  txtpassword, 
  txtdatepicker, 
  txtluongCB, 
  txtchucvu, 
  txtgioLam 
  ) {
    this.txttknv = txttknv;
    this.txtname = txtname;
    this.txtemail = txtemail;
    this.txtpassword = txtpassword;
    this.txtdatepicker = txtdatepicker;
    this.txtluongCB = txtluongCB;
    this.txtchucvu = txtchucvu;
    this.txtgioLam = txtgioLam;
}

NhanVien.prototype.tinhTongLuong = function() {
    if (this.txtchucvu === "Sếp"){
       return(this.txtluongCB * 3)
    }
    if (this.txtchucvu === "Trưởng phòng"){
        return(this.txtluongCB * 2)
    }
    if (this.txtchucvu === "Nhân viên"){
        return(this.txtluongCB * 1)
    }

}

NhanVien.prototype.xepLoai = function () {

    if (this.txtgioLam >= 192) {
      return " nhân viên xuất sắc";
    }

    if (this.txtgioLam >= 176) {
      return "nhân viên giỏi";
    }

    if (this.txtgioLam >= 160) {
      return "nhân viên khá";
    }

    if (this.txtgioLam < 160) {
      return "nhân viên trung bình";
    }

  };

document.getElementById("btnReset").addEventListener("click",resetForm)
document.getElementById("btnThemNV").addEventListener("click", themNhanVien)
document.getElementById("btnCapNhat").addEventListener("click", capNhatNhanVien)
document.getElementById("tableDanhSach").addEventListener("click",delegationTable)

var dsnv = [];

function themNhanVien() {
    var txttknv = document.getElementById("tknv").value;
    var txtname = document.getElementById("name").value;
    var txtemail = document.getElementById("email").value;
    var txtpassword = +document.getElementById("password").value;
    var txtdatepicker = document.getElementById("datepicker").value;
    var txtluongCB = +document.getElementById("luongCB").value;
    var txtchucvu = document.getElementById("chucvu").value;
    var txtgioLam = document.getElementById("gioLam").value;

    var nhanVien = new NhanVien(
      txttknv, 
      txtname, 
      txtemail, 
      txtpassword, 
      txtdatepicker, 
      txtluongCB, 
      txtchucvu, 
      txtgioLam
      );

    console.log(nhanVien);

    dsnv.push(nhanVien);
    console.log(dsnv);

    hienthi();
    resetForm();
}

function capNhatNhanVien() {
    var txttknv = document.getElementById("tknv").value;
    var txtname = document.getElementById("name").value;
    var txtemail = document.getElementById("email").value;
    var txtpassword = +document.getElementById("password").value;
    var txtdatepicker = document.getElementById("datepicker").value;
    var txtluongCB = +document.getElementById("luongCB").value;
    var txtchucvu = document.getElementById("chucvu").value;
    var txtgioLam = document.getElementById("gioLam").value;
    
    var nhanVien = new NhanVien(
      txttknv, 
      txtname, 
      txtemail, 
      txtpassword, 
      txtdatepicker, 
      txtluongCB,
      txtchucvu, 
      txtgioLam
      );

    dsnv = dsnv.map(function (nv) {
        if (nv.txttknv === txttknv) {
          return nhanVien;
        }
        return nv;
      });
    
      hienThi();
      resetForm()
}

function hienthi() {
    var tbody = document.getElementById("tableDanhSach");
    var html = "";

    for ( var i = 0; i < dsnv.length;  i += 1 ) {
        var nv = dsnv[i];
        html += `
        <tr>
            <td>${nv.txttknv}</td>
            <td>${nv.txtname}</td>
            <td>${nv.txtemail}</td>
            <td>${nv.txtpassword}</td>
            <td>${nv.txtdatepicker}</td>
            <td>${nv.txtluongCB}</td>
            <td>${nv.txtchucvu}</td>
            <td>${nv.txtgioLam}</td>
            <td>${nv.tinhTongLuong()}</td>
            <td>${nv.xepLoai()}</td>
            <td>
            <button class="btn btn-danger" data-action="select" data-tknv = "${nv.txttknv}">update</button>
            <button class="btn btn-danger" data-action="delete" data-tknv = "${nv.txttknv}">Xóa</button>
            </td>
            
            
        </tr>
       
        `;
    }
    tbody.innerHTML = html;

}

function resetForm(){
updateForm ({})

}

function updateForm(nhanVien) {
  document.getElementById("tknv").value = nhanVien.txttknv || "";
  document.getElementById("name").value = nhanVien.txtname || "";
  document.getElementById("email").value = nhanVien.txtemail || "";
  document.getElementById("password").value = nhanVien.txtpassword || "";
  document.getElementById("datepicker").value = nhanVien.txtdatepicker || "";
  document.getElementById("luongCB").value = nhanVien.txtluongCB || "";
  document.getElementById("chucvu").value = nhanVien.txtchucvu || "";
  document.getElementById("gioLam").value = nhanVien.txtgioLam || "";

  
}

function delegationTable(event){
  console.log(event.target);

  var txttknv = event.target.getAttribute("data-tknv");
  var action = event.target.getAttribute("data-action");

  if (action === "select"){
    chonNhanVien(txttknv);
  }

  if (action === "delete"){
    xoaNhanVien(txttknv);
  }

  
}

function xoaNhanVien(txttknv){
  dsnv = dsnv.filter(function(nv) {
    return nv.txttknv !== txttknv;
  
    });
  
    hienthi();
}



function chonNhanVien(txttknv){

  var nhanVien = dsnv.find(function(nv){
    return nv.txttknv === txttknv

  })

  document.getElementById("tknv").disabled = true;

  updateForm(nhanVien)
  

}
