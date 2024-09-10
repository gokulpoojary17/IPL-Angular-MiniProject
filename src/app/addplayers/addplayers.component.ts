import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-addplayers',
  templateUrl: './addplayers.component.html',
  styleUrl: './addplayers.component.css'
})
export class AddplayersComponent {
  player: any = {};

playerForm: FormGroup;
teams = [
      { name: 'Mumbai Indians' },
      { name: 'Chennai Super Kings' },
      { name: 'Kolkata Knight Riders' },
      {name:'royal challengers bangalore'}
      // Add other teams as necessary
    ];

constructor(private http: HttpClient,private fb: FormBuilder,private router:Router,private playerService:PlayerService) {
  this.playerForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    // dob: new FormControl('', [
    //   Validators.required,
    //   this.dateFormatValidator
    // ]),
  });
}

ngOnInit(): void {
  this.playerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    dob: ['', [Validators.required, this.dateFormatValidator]],
    battingStyle: ['', Validators.required],
    role: ['', Validators.required],
    team: ['', Validators.required],
    matches: ['', [Validators.required, Validators.min(1)]],
    sixes: ['', [Validators.required, Validators.min(0)]],
    fours: ['', [Validators.required, Validators.min(0)]],
    runs: ['', [Validators.required, Validators.min(0)]],
    hundreds: ['', [Validators.required, Validators.min(0)]],
    fifties: ['', [Validators.required, Validators.min(0)]],
  });
}


dateFormatValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  const dateFormatRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
  if (value && !dateFormatRegex.test(value)) {
    return { invalidDateFormat: true };
  }

  const [, day, month, year] = value.match(dateFormatRegex) || [];
  
  if (month && (parseInt(month, 10) < 1 || parseInt(month, 10) > 12)) {
    return { invalidMonth: true };
  }

  if (day && (parseInt(day, 10) < 1 || parseInt(day, 10) > 31)) {
    return { invalidDay: true };
  }
  if(year && (parseInt(year, 10) < 1 || parseInt(year)>2024)){
    return {invalidyear: true };
  }

  return null;
}

// Custom validator for date format 'dd-mm-yyyy'
// dateValidator(control: any) {
//   const value = control.value;

//   const regex = /^\d{2}- \d{2}- \d{4}$/;
//   if (value && !regex.test(value)) {
//     return { invalidDateFormat: true };
//   }

//   const [, day, month, year] = value.match(regex) || [];
  
//   if (month && (parseInt(month, 10) < 1 || parseInt(month, 10) > 12)) {
//     return { invalidMonth: true };
//   }

//   if (day && (parseInt(day, 10) < 1 || parseInt(day, 10) > 31)) {
//     return { invalidDay: true };
//   }
//   if(year && (parseInt(year, 10) < 1 || parseInt(year)>2024)){
//     return {invalidyear: true };
//   }

//   return null;
//   return regex.test(control.value) ? null : { invalidDate: true };
// }
onSubmit(): void {
  if (this.playerForm.valid) {
    this.playerService.addplayer(this.playerForm.value).subscribe(
      response => {
        console.log('Player added successfully', response);
        this.router.navigate(['/list']); // Adjust the route as necessary

        this.playerForm.reset(); // Reset form after successful submission
      },
      error => {
        console.error('Error adding player', error);
      }
    );
  }
}



onCancel(): void {
  this.playerForm.reset();
}

focusInvalidField() {
  const invalidControl = document.querySelector('.ng-invalid');
  if (invalidControl) {
    (invalidControl as HTMLElement).focus();
  }
}

}
