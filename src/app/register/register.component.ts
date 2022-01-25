
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Customer, HttpclientService } from '../service/httpclient.service';
import { MatDialog,MatDialogConfig, MatDialogRef} from '@angular/material/dialog'; 
import { TermsAndConditionsComponent } from '../terms-and-conditions/terms-and-conditions.component';
import { LogoutComponent } from '../logout/logout.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  pinfoSection = true;
  empSection = false;
  isSecondary=false;
  creditApplicationForm!: FormGroup;
  readonly minAge = 18;
  maxDob!: Date;

  
  user:Customer = new Customer("",0,"","","","","",0,"",0,"",0,"","");
 
  account:any;
  // regular expression for number vlaidation
  numberRegEx =  /^-?\d+\.?\d*$/;
  // regular expressin for string validation
  stringRegEx =  /^[^0-9]+$/;
  // regular expressionfor password pattern validation with minimum 
  // character of 6,at least one Capital,small, number,special characters
  passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
  

  constructor(private httpClientService: HttpclientService,private formBuilder:FormBuilder,private dialog:MatDialog) { 
   
  }

  ngOnInit(): void {

    // the code that restrics credit applicants to be 18 years and above
    // in the date of birth input
    const today = new Date();
    this.maxDob = new Date(
      today.getFullYear() - this.minAge,
      today.getMonth(),
      today.getDate() 
      );

    // validating the credit application input
    this.creditApplicationForm = this.formBuilder.group ({
      
      'firstName': new FormControl(null, [Validators.required,
        Validators.pattern(this.stringRegEx)]),
      'middleName':  new FormControl(null,[ Validators.required,
        Validators.pattern(this.stringRegEx)]),
      'lastName':new FormControl(null, [Validators.required,
        Validators.pattern(this.stringRegEx)]),
      // 'email' : new FormControl(null, [Validators.required, Validators.email,
      //     Validators.pattern('^[-a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      'phoneNumber': new FormControl(
        null,
        [
          Validators.required,
          
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'username': new FormControl(null, Validators.required),
      'pass': new FormControl(null, 
        [Validators.required,
          Validators.pattern(this.passwordRegEx)
      ]),
      'confirmpassword': new FormControl(null,[Validators.required]),
      'birthdate':new FormControl(null, Validators.required),
      'ssn':new FormControl(null, [Validators.required,
        Validators.pattern(this.numberRegEx)]),
      'address': new FormControl(null, Validators.required),
      // 'city': new FormControl(null, Validators.required),
      // 'state': new FormControl(null, Validators.required),
      // 'zipcode': new FormControl(null, [Validators.required,Validators.pattern(this.numberRegEx)]),
      'employer':new FormControl(null, [Validators.required,
        Validators.pattern(this.stringRegEx)]),
      'annualSalary':new FormControl(null, [Validators.required,
        Validators.pattern(this.numberRegEx)]),
      'fieldOfEmp':new FormControl(null, [Validators.required,
        Validators.pattern(this.stringRegEx)]),
      'lengthOfEmp':new FormControl(null, [Validators.required,
        Validators.pattern(this.numberRegEx)]),
    
          isAccept:new FormControl(false, Validators.requiredTrue),
         
      
    },
    {
      validators:this.PasswordMatch('pass','confirmpassword')
    }
    );

    
  }

  // passord match validators 
  PasswordMatch(controlName:string,matchingControlName:string){

    return(formGroup:FormGroup) =>{
      const control = formGroup.controls[controlName];
      const Matchingcontrol = formGroup.controls[matchingControlName];
      if(Matchingcontrol.errors && !Matchingcontrol.errors.passwordMatch){
        return
      }
      if(control.value !== Matchingcontrol.value){
        Matchingcontrol.setErrors({passwordMatch:true})
      }
      else{
        Matchingcontrol.setErrors(null);
      }
    }
  }
  
  // the function that controlls the terms and condtions Angular
  // mat dialog
  openDialog(){

   const termsAndCondtionsdailog=  this.dialog.open(TermsAndConditionsComponent);
    
   width: '250px';
   height: '300px';
    termsAndCondtionsdailog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // funcion that handles navagation from personal infomation input
  // to compnay information
  toEmpSection(){

    this.pinfoSection = false;
    this.empSection = true;

  }

  // funcion that handles navagation from  company information  input
  // to personal infomation
  onBack(){

    this.pinfoSection = true;
    this.empSection = false;
  }

  // get control of each user input
  get creditCardReactiveForm(){
    return this.creditApplicationForm.controls;
  }

 // function that helps to post the user input to the database using
 // http client service and reactive angular form
  createCustomerCredit(): void {
  
    this.account= this.creditApplicationForm.value;
    this.httpClientService.createCustomerCredit(this.account)
        .subscribe( data => {
         
          this.creditApplicationForm.get('ssn')?.setValue(this.account.ssn);
          this.creditApplicationForm.get('firstName')?.setValue(this.account.firstName);
          this.creditApplicationForm.get('middleName')?.setValue(this.account.middleName);
          this.creditApplicationForm.get('lastName')?.setValue(this.account.lastName);
          this.creditApplicationForm.get('birthdate')?.setValue(this.account.birthdate);
          this.creditApplicationForm.get('address')?.setValue(this.account.address);
          this.creditApplicationForm.get('phoneNumber')?.setValue(this.account.phoneNumber);
          this.creditApplicationForm.get('employer')?.setValue(this.account.employer);
          this.creditApplicationForm.get('lengthOfEmp')?.setValue(this.account.lengthOfEmp);
          this.creditApplicationForm.get('fieldOfEmp')?.setValue(this.account.fieldOfEmp);
          this.creditApplicationForm.get('annualSalary')?.setValue(this.account.annualSalary);
          this.creditApplicationForm.get('username')?.setValue(this.account.username);
          this.creditApplicationForm.get('pass')?.setValue(this.account.pass);

          alert("Credit Application created successfully.");
          this.creditApplicationForm.reset(this.creditApplicationForm.value);
        },
          // error message 
          error =>{
            console.log(error);
            alert("username is taken Credit Application was not successful.please use another username");
          } 
        
          );

  };




}
