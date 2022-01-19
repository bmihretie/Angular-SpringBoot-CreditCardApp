
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Customer, HttpclientService } from '../service/httpclient.service';
import { MatDialog,MatDialogConfig, MatDialogRef} from '@angular/material/dialog'; 
import { TermsAndConditionsComponent } from '../terms-and-conditions/terms-and-conditions.component';


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
  creditApplicationForm!: FormGroup;
  minAge=18;

  // user:Customer = new Customer("",0, 0,"","","","","","","","","","","","","","","");
  user:Customer = new Customer(0,"","","","","",0,"",0,"",0,"","");
 
 
  
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
 
  passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
  

  constructor(private httpClientService: HttpclientService,private formBuilder:FormBuilder,private dialog:MatDialog) { 
   
  }

  ngOnInit(): void {
    this.creditApplicationForm = this.formBuilder.group ({
      // 'accountNumber' : new FormControl(null, [Validators.required,
      //   Validators.pattern(this.numberRegEx)]),
      // 'balance': new FormControl(null, [Validators.required,
      //   Validators.pattern(this.numberRegEx)]),
      // 'remianingCredit' : new FormControl(null, [Validators.required,
      //   Validators.pattern(this.numberRegEx)]),
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
          // Validators.pattern('^((\\+1*-?)|0)?[0-9]{10}$')
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'userName': new FormControl(null, Validators.required),
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
      // 'referenceOneName':new FormControl(null, [Validators.required,
      //   Validators.pattern(this.stringRegEx)]),
      // 'referenceOnePhoneNumb':new FormControl(
      //   null,
      //   [
      //     Validators.required,
          
      //     Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      //   ]),
      //   'referenceTwoName':new FormControl(null, [Validators.required,
      //     Validators.pattern(this.stringRegEx)]),
      //   'referenceTwoPhoneNumb':new FormControl(
      //     null,
      //     [
      //       Validators.required,
          
      //       Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      //     ]),

          isAccept:new FormControl(false, Validators.requiredTrue),
         
      
    },
    {
      validators:this.PasswordMatch('pass','confirmpassword')
    }
    );

    
  }

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

  get confirmpassword(){
    return this.creditApplicationForm.get('confirmpassword');
  }
  

  get creditCardReactiveForm(){
    return this.creditApplicationForm.controls;
  }

  openCompDialog() {
    const myCompDialog = this.dialog.open(TermsAndConditionsComponent);
    myCompDialog.afterClosed().subscribe((res) => {
      // Data back from dialog
      console.log({ res });
    });
  }

  openDialog(){

   const termsAndCondtionsdailog=  this.dialog.open(TermsAndConditionsComponent);
    
   width: '250px';
   height: '300px';
    termsAndCondtionsdailog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
  toEmpSection(){

    this.pinfoSection = false;
    this.empSection = true;

  }

  onBack(){

    this.pinfoSection = true;
    this.empSection = false;
  }

  // createCustomerCredit(): void {
  //   this.httpClientService.createCustomerCredit(this.user)
  //       .subscribe( data => {
  //         alert("Credit Application created successfully.");
  //       });

  // };

  createCustomerCredit(): void {
    this.httpClientService.createCustomerCredit(this.creditApplicationForm.value)
        .subscribe( data => {
          alert("Credit Application created successfully.");
        },
        
      
          error =>{
            console.log(error);
            alert("username is taken Credit Application was not successful.");
          } 
        
          );

  };



  saveData(){
    console.log(this.creditApplicationForm.value)
  }

  
//  Ctrl($scope: { birthDate: any; minAge: Date; }, $filter: any) {
//     var today = new Date();
//     var minAge = 18;
//     $scope.birthDate = ($filter)('date')(new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate()), 'yyyy-MM-dd');
//     $scope.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
//   }

//  Ctrl($scope:any, $filter:any) {
//     var today = new Date();
//     var minAge = 18;
//     $scope.birthDate = ($filter)('date')(new Date(today.getDate(),today.getMonth(),today.getFullYear() - minAge,  ), 'dd-MM-yyy');
//     $scope.minAge = new Date(today.getDate() , today.getMonth(),today.getFullYear() - minAge );
//   }

  Ctrl($scope:any, $filter: any) {
    var today = new Date();
    console.log(today);
    var minAge=18;
   // $scope.birthDate = ($filter)('date')(new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate()), 'yyyy-MM-dd');
    $scope.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
    console.log($scope.minAge);
  }
  
  
  



}
