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
document.getElementById("btnTimNV").addEventListener("click", timKiemNhanVien)
document.getElementById("btnCapNhat").addEventListener("click", capNhatNhanVien)
document.getElementById("tableDanhSach").addEventListener("click",delegationTable)

var dsnv = JSON.parse(localStorage.getItem("dsnv")) || [];
khoiTao();


function khoiTao(){
  if(dsnv.length === 0){
    return
  }
  dsnv = dsnv.map(function(nv){
    return new NhanVien(
      nv.txttknv,
      nv.txtname,
      nv.txtemail,
      nv.txtpassword,
      nv.txtdatepicker,
      nv.txtluongCB,
      nv.txtchucvu,
      nv.txtgioLam
      );
  });

  hienthi(dsnv);
}

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

     var isValid =  xacThucDuLieu(nhanVien)

     if (!isValid){
       return
     }

    console.log(nhanVien);

    dsnv.push(nhanVien);
    localStorage.setItem("dsnv", JSON.stringify(dsnv));

    hienthi(dsnv);
    resetForm();
}

function xoaNhanVien(txttknv){
  dsnv = dsnv.filter(function(nv) {
    return nv.txttknv !== txttknv;
  
    });
  
    hienthi(dsnv);
}

function timKiemNhanVien(){
  var search = document.getElementById("searchName").value

  var newDsnv = dsnv.filter(function(nv){
    var searchValue = search.trim().toLowerCase()
    var xepLoaiValue = nv.xepLoai().trim().toLowerCase()


    return xepLoaiValue.indexOf(searchValue) !== -1
  
  })

  hienthi(newDsnv)


}
// return nameValue.indexOf(searchValue) !== -1

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

      var isValid =  xacThucDuLieu(nhanVien)

     if (!isValid){
       return
     }

    dsnv = dsnv.map(function (nv) {
        if (nv.txttknv === txttknv) {
          return nhanVien;
        }
        return nv;
      });
      hienthi(dsnv);
      resetForm()
}

function hienthi(dsnv) {
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
updateForm ({});
document.getElementById("tknv").disabled = false

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

function chonNhanVien(txttknv){

  var nhanVien = dsnv.find(function(nv){
    return nv.txttknv === txttknv

  })

  document.getElementById("tknv").disabled = true;

  updateForm(nhanVien)
}


function xacThucDuLieu(nhanVien) {

  var validator = new Validator() ;
    var isValid = validator.isRequired("tbTKNV", nhanVien.txttknv) && validator.gioiHanKyTu("tbTKNV", nhanVien.txttknv);
    isValid &= validator.isRequired("tbTen", nhanVien.txtname) && validator.tenNhanVienChu("tbTen", nhanVien.txtname);
    isValid &= validator.isRequired("tbEmail", nhanVien.txtemail) && validator.quyDinhEmail("tbEmail", nhanVien.txtemail);
    isValid &= validator.isRequired("tbMatKhau", nhanVien.txtpassword) 
    isValid &= validator.isRequired("tbNgay", nhanVien.txtdatepicker);
    isValid &= validator.isRequired("tbLuongCB", nhanVien.txtluongCB)&& validator.gioiHanLuong("tbLuongCB", nhanVien.txtluongCB);
    isValid &= validator.isRequired("tbChucVu", nhanVien.txtchucvu);
    isValid &= validator.isRequired("tbGiolam", nhanVien.txtgioLam) && validator.gioiHanGioLam("tbGiolam", nhanVien.txtgioLam);

    if (!isValid){
      for (var key in validator.errors){
        if (validator.errors[key]){
          document.getElementById(key).innerHTML = validator.errors[key];
        }
      }

      return false
    }
    return true

}