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

Validator.prototype.txtemail = function(name, value) {
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
        this.errors[name] = "Email không đúng định dạng";
        return false;
      }
      return true;
    };

    Validator.prototype.txtpassword = function(name, value) {
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/.test(value)) {
          this.errors[name] = "Mật mã ";
          return false;
        }
        return true;
      };

    

    
    