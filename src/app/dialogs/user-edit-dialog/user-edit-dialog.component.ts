import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ErrorResponse} from '../../model/error-response';
import {Address} from '../../model/address';
import {Router} from '@angular/router';

@Component({
    selector: 'fest-finder-user-edit-dialog',
    templateUrl: './user-edit-dialog.component.html',
    styleUrls: ['./user-edit-dialog.component.scss']
})
export class UserEditDialogComponent implements OnInit {
    @Input()
    user: User;

    form: FormGroup;
    numbers: number[];
    regions = ['Europe', 'North America', 'South America', 'Asia', 'Africa', 'Oceania'];

    constructor(private fb: FormBuilder, private userService: UserService, private snackbar: MatSnackBar, private router: Router) {
    }

    ngOnInit(): void {
        this.numbers = Array(95).fill(1).map((x, i) => i + 5);
        this.form = this.fb.group(
            {
                firstName: [this.user.firstName, Validators.required],
                lastName: [this.user.lastName, Validators.required],
                age: [this.user.age, Validators.required],
                email: [this.user.email, Validators.required],
                phone: [this.user.phone, Validators.required],
                region: [this.user.address.region, Validators.required],
                country: [this.user.address.country, Validators.required],
                subdivision: [this.user.address.subdivision],
                city: [this.user.address.city, Validators.required],
                street: [this.user.address.street, Validators.required],
                additionalDetails: [this.user.address.additionalDetails]
            }
        );
    }

    send() {
        const user = this.constructUser();
        this.userService.updateUserDetails(user).subscribe(response => {
            this.snackbar.open(`Successfully updated user with id ${response.id}`);
            this.reloadComponent();
        }, (error: ErrorResponse) => {
            this.snackbar.open('Error updating user!');
        });
    }

    private constructUser(): User {
        const address = this.constructAddress();
        return new User(
            this.user.username,
            this.form.get('firstName').value,
            this.form.get('lastName').value,
            this.form.get('age').value,
            this.form.get('email').value,
            this.form.get('phone').value,
            address);
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

    private reloadComponent() {
        const currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

}
