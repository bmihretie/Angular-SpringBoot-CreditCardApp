
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer, HttpclientService } from '../service/httpclient.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // validateForm!:FormGroup

  pinfoSection = true;
  empSection = false;
  isSecondary=false;
  exform!: FormGroup;

  user:Customer = new Customer("",0, 0,"","","","","","","","","","","","","","","");
 
  
  userInfo!:{
    fname:string,
    mname:string | null,
    lname:string,
    dob:string,
    ssn:number,
    address:string,
    cname:string,
    phoneno:string,
    salary:number,
    feild:string,
    emplen:number
  }

  contacts!: {c1Name:string,c1Phone:string,c2Name:string,c2Phone:string};
  secondary!: string | null;

  numberRegEx =  /^-?\d+\.?\d*$/;
  stringRegEx =  /^[^0-9]+$/;
  ///[^0-9]/g;
  ///@"^[a-zA-Z]+$/;
  passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
  ///^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/;
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // '^(?=.*?[A-Z])(?=.*?[a-z])(?=,*?[0-9]).{6,8}$';
  //'.*?[a-zA-Z].*?';
  //'/\-?\d*\.?\d{1,2}/';
 

  constructor(private httpClientService: HttpclientService) { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'accountNumber' : new FormControl(null, [Validators.required,
        Validators.pattern(this.numberRegEx)]),
      'balance': new FormControl(null, [Validators.required,
        Validators.pattern(this.numberRegEx)]),
      'remianingCredit' : new FormControl(null, [Validators.required,
        Validators.pattern(this.numberRegEx)]),
      'firstName': new FormControl(null, [Validators.required,
        Validators.pattern(this.stringRegEx)]),
      'middleName':  new FormControl(null,[ Validators.required,
        Validators.pattern(this.stringRegEx)]),
      'lastName':new FormControl(null, [Validators.required,
        Validators.pattern(this.stringRegEx)]),
      'email' : new FormControl(null, [Validators.required, Validators.email,
          Validators.pattern('^[-a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      'phone': new FormControl(
        null,
        [
          Validators.required,
          // Validators.pattern('^((\\+1*-?)|0)?[0-9]{10}$')
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'userName': new FormControl(null, Validators.required),
      'password': new FormControl(null, 
        [Validators.required,
          Validators.pattern(this.passwordRegEx)
      ]),
      'birthDate':new FormControl(null, Validators.required),
      'socialSecurity':new FormControl(null, [Validators.required,
        Validators.pattern(this.numberRegEx)]),
      'address': new FormControl(null, Validators.required),
      'companyName':new FormControl(null, [Validators.required,
        Validators.pattern(this.stringRegEx)]),
      'salary':new FormControl(null, [Validators.required,
        Validators.pattern(this.numberRegEx)]),
      'emptField':new FormControl(null, [Validators.required,
        Validators.pattern(this.stringRegEx)]),
      'lengthOfEmployment':new FormControl(null, [Validators.required,
        Validators.pattern(this.numberRegEx)]),
      'referenceOneName':new FormControl(null, [Validators.required,
        Validators.pattern(this.stringRegEx)]),
      'referenceOnePhoneNumb':new FormControl(
        null,
        [
          Validators.required,
          // Validators.pattern('^((\\+1*-?)|0)?[0-9]{10}$')
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
        'referenceTwoName':new FormControl(null, [Validators.required,
          Validators.pattern(this.stringRegEx)]),
        'referenceTwoPhoneNumb':new FormControl(
          null,
          [
            Validators.required,
            // Validators.pattern('^((\\+1*-?)|0)?[0-9]{10}$')
            Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
          ]),

          isAccept:new FormControl(false, Validators.requiredTrue),
          //acceptTerms: [false, Validators.requiredTrue]
      
    });

    
  }

  
  get accountNumber() {
    return this.exform.get('accountNumber');
  }

  get name(){
    return this.exform.get('firstName');
  }

  get balance(){
    return this.exform.get('balance');
  }

   
    get remianingCredit(){
      return this.exform.get('remianingCredit');
    }

    get firstName(){
      return this.exform.get('firstName');
    }

    get middleName(){
      return this.exform.get('middleName');
    } 

    get lastName(){
      return this.exform.get('lastName');
    } 

    get email(){
      return this.exform.get('email');
    }

    get phone(){
      return this.exform.get('phone');
    }
    get userName(){
      return this.exform.get('userName');
    }

    get password(){
      return this.exform.get('password');
    }

    get birthDate(){
      return this.exform.get('birthDate');
    }
  
    get socialSecurity(){
      return this.exform.get('socialSecurity');
    }

    get address(){
      return this.exform.get('address');
    }

    get companyName(){
      return this.exform.get('companyName');
    }

    get salary(){
      return this.exform.get('salary');
    }

    get emptField(){
      return this.exform.get('emptField');
    }

    get lengthOfEmployment(){
      return this.exform.get('lengthOfEmployment');
    }

    get referenceOneName(){
      return this.exform.get('referenceOneName');
    }

    get referenceOnePhoneNumb(){
      return this.exform.get('referenceOnePhoneNumb');
    }

    get referenceTwoName(){
      return this.exform.get('referenceTwoName');
    }

    get referenceTwoPhoneNumb(){
      return this.exform.get('referenceTwoPhoneNumb');
    }

    get isAccept(){
      return this.exform.get('isAccept');
    }
  
  toEmpSection(){

    this.pinfoSection = false;
    this.empSection = true;

  }

  onBack(){

    this.pinfoSection = true;
    this.empSection = false;
  }

  createCustomerCredit(): void {
    this.httpClientService.createCustomerCredit(this.user)
        .subscribe( data => {
          alert("Credit Application created successfully.");
        });

  };



}
