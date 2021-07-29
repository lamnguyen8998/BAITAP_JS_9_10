function QuanLyNhanVien(){
    this.dsnv = JSON.parse(localStorage.getItem('dsnv')) || [];

}

QuanLyNhanVien.prototype.khoiTao = function() {
    if(this.dsnv.length === 0){
        return;
      }
      this.dsnv = this.dsnv.map(function(nv){
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
};

QuanLyNhanVien.prototype.saveLocalStorage = function(){
    localStorage.setItem("dsnv", JSON.stringify(this.dsnv));

}
QuanLyNhanVien.prototype.themNhanVien = function (nhanVien){
    this.dsnv.push(nhanVien);
    this.saveLocalStorage();

};

QuanLyNhanVien.prototype.capNhatNhanVien = function(nhanVien){
    this.dsnv = this.dsnv.map(function (nv) {
        if (nv.txttknv === nhanVien.txttknv) {
          return nhanVien;
        }
        return nv;
      });
      this.saveLocalStorage();


}
 
QuanLyNhanVien.prototype.xoaNhanVien = function(txttknv){
    this.dsnv = this.dsnv.filter(function(nv) {
        return nv.txttknv !== txttknv;
      
        });
        this.saveLocalStorage();
}

QuanLyNhanVien.prototype.timKiemNhanVien = function(search){
    return this.dsnv.filter(function(nv){
        var searchValue = search.trim().toLowerCase()
        var xepLoaiValue = nv.xepLoai().trim().toLowerCase()
    
    
        return xepLoaiValue.indexOf(searchValue) !== -1
      
      });
}

QuanLyNhanVien.prototype.chonNhanVien = function (txttknv){
    return this.dsnv.find(function(nv){
        return nv.txttknv === txttknv;
    
      });


}