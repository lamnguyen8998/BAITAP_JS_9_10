function NhanVien(txttknv, txtname, txtemail, txtpassword, txtdatepicker, txtluongCB, txtchucvu, txtgioLam ) {
    this.txttknv = txttknv;
    this.txtname = txtname;
    this.txtemail = txtemail;
    this.txtpassword = txtpassword;
    this.txtdatepicker = txtdatepicker;
    this.txtluongCB = txtluongCB;
    this.txtchucvu = txtchucvu;
    this.txtgioLam = txtgioLam;


}
document.getElementById("btnThemNV").addEventListener("click", themNhanVien)

function themNhanVien(){
    var txttknv = document.getElementById("tknv").value;
    var txtname = document.getElementById("name").value;


}