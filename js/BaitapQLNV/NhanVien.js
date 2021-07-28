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