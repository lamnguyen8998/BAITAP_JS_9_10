function Validator() {
  
    this.errors = {};
  
}

Validator.prototype.isRequired = function(name, value) {
  if (!value){
    this.errors[name] = " Vui lòng nhập thông tin"
    return false
  }
  return true;
};

Validator.prototype.quyDinhEmail = function(name, value) {
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
        this.errors[name] = "Email không đúng định dạng";
        return false;
      }
      return true;
    };

    Validator.prototype.gioiHanLuong = function(name, value) {
      console.log(value);
      if( value < 1000000 || value > 20000000) {
        this.errors[name] = "Lương ko hợp lệ";
        return false;

      }
      return true;
        
    };

    Validator.prototype.gioiHanGioLam = function(name, value) {
      console.log(value);
      if( value < 80 || value > 200) {
        this.errors[name] = "Giờ làm không hợp lệ";
        return false;

      }
      return true;
        
    };

    Validator.prototype.gioiHanKyTu = function(name, value) {
      if (!/([a-zA-Z]|\d){4,6}$/.test(value)) {
        this.errors[name] = "TKNV không đúng, VD: A123";
        return false;
      }
      return true;
      };

      Validator.prototype.tenNhanVienChu = function(name, value) {
        if (!/[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/.test(value)) {
          this.errors[name] = "Tên nhân viên phải là chữ";
          return false;
        }
        return true;
        };

    Validator.prototype.gioiHanPassWord = function(name, value) {
      if (!/^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{6,10}$/.test(value)) {
        this.errors[name] = "Mật mã phải từ 6 đến 10 ký tự và phải có ký tự đặc biệt";
        return false;
      }
      return true;
      };

    // Validator.prototype.txtpassword = function(name, value) {
    //   if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/.test(value)) {
    //       this.errors[name] = "Mật mã phải từ 6 đến 10 ký tự và phải có ký tự đặc biệt ";
    //       return false;
    //     }
    //     return true;
    //   };

    

    
    