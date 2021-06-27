import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUpAnimation } from '../../../../@fury/animations/fade-in-up.animation';
import {FestFinderErrorStateMatcher} from '../../../util/error-state-matcher';
import {User} from '../../../model/user';
import {Address} from '../../../model/address';
import {UserType} from '../../../model/enums/user-type';
import {UserService} from '../../../service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ErrorResponse} from '../../../model/error-response';

@Component({
  selector: 'fury-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [fadeInUpAnimation]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  inputType = 'password';
  visible = false;
  accepted = false;
  matcher = new FestFinderErrorStateMatcher();
  numbers: number[];
  regions =  ['Europe', 'North America', 'South America', 'Asia', 'Africa', 'Oceania'];
  countries: string[];
  userTypes = ['NORMAL', 'OWNER', 'ORGANIZER'];

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private userService: UserService,
              private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.numbers = Array(95).fill(1).map((x, i) => i + 5);
    this.form = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      phone: ['', Validators.required],
      type: ['', Validators.required],
      region: ['', Validators.required],
      country: ['', Validators.required],
      subdivision: [''],
      city: ['', Validators.required],
      street: ['', Validators.required],
      additionalDetails: [''],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  send() {
    const user = this.constructUser();
    this.userService.registerUser(user).subscribe( response => {
      this.snackbar.open(`Successfully registered user with username ${response.username}`);
      this.router.navigate(['login']);
    }, (error: ErrorResponse) => {
      this.snackbar.open(error.message);
    });
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('passwordConfirm').value;

    return password === confirmPassword ? null : { notSame: true };
  }

  private constructUser(): User {
    const address = this.constructAddress();
    return new User(
        this.form.get('username').value,
        this.form.get('firstName').value,
        this.form.get('lastName').value,
        this.form.get('age').value,
        this.form.get('email').value,
        this.form.get('phone').value,
        address,
        this.form.get('password').value,
        this.form.get('type').value,
        null,
        );
  }

  private constructAddress() {
    return new Address(
        this.form.get('region').value,
        this.form.get('country').value,
        this.form.get('subdivision').value,
        this.form.get('city').value,
        this.form.get('street').value,
        this.form.get('additionalDetails').value);
  }
}
