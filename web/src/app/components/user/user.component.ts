import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/models/user';
import { UserService } from 'src/app/services/user';
import { ToastrService } from 'ngx-toastr';

// import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})

export class UserComponent {

	isUpdate: boolean = false;

	formUser: FormGroup = new FormGroup({});
	@ViewChild('closeUserModal', {static: false}) closeUserModal?: ElementRef;

	listUsers: UserModel[] = [];

	constructor(private userService: UserService, private toastr: ToastrService) {

		this.formUser = new FormGroup({
			id: new FormControl(null),
			name: new FormControl(''),
			lastname: new FormControl(''),
			phone: new FormControl(''),
			email: new FormControl(''),
		});

		this.list();
	}

	list() {
		this.userService.getUsers().subscribe((res) => {
			if (res.success) {
				this.listUsers = res.data;
			}
		});
	}

	newUser() {
		this.formUser.reset();
		this.isUpdate = false;
	}

	selectItem(item: any) {
		this.isUpdate = true;
		this.formUser.controls['id'].setValue(item.id);
		this.formUser.controls['name'].setValue(item.name);
		this.formUser.controls['lastname'].setValue(item.lastname);
		this.formUser.controls['phone'].setValue(item.phone);
		this.formUser.controls['email'].setValue(item.email);
	}

	save() {

		const data = this.formUser.value;

		if((data.name ?? '') == '' || (data.lastname ?? '') == '' || (data.phone ?? '') == '' || (data.email ?? '') == '') {
			this.toastr.warning('Todos los campos son requerido');
			return;
		}

		if((data.id ?? '') == '') {
			delete data.id;
		}

		data.phone = (data.phone ?? '').toString();

		this.userService.saveUser(data).subscribe((res) => {
			if (res) {
				this.list();
				this.toastr.success('Usuario agregado');
			} else {
				this.toastr.warning('Ocurrio un error al insertar el usuario');
			}
	
			this.closeUserModal?.nativeElement.click();
		});
	}

	update() {

		const data = this.formUser.value;

		if((data.name ?? '') == '' || (data.lastname ?? '') == '' || (data.phone ?? '') == '' || (data.email ?? '') == '') {
			this.toastr.warning('Todos los campos son requerido');
			return;
		}

		if((data.id ?? '') == '') {
			delete data.id;
		}

		data.phone = (data.phone ?? '').toString();

		this.userService.updateUser(data).subscribe((res) => {
			if (res) {
				this.list();
				this.toastr.success('Usuario actualizado');
			} else {
				this.toastr.warning('Ocurrio un error al actualizar el usuario');
			}
	
			this.closeUserModal?.nativeElement.click();
		});
	}

	delete(id: number) {

		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: "btn btn-danger",
				cancelButton: "btn btn-warning mx-3"
			},
			buttonsStyling: false
		});
		
		swalWithBootstrapButtons.fire({
			title: "¿Está seguro de eliminar el usuario?",
			text: "Esta acción no podra ser revertida!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Eliminar",
			cancelButtonText: "Cancelar",
			reverseButtons: true
		}).then((result) => {
			if (result.isConfirmed) {
				this.userService.deleteUser(id).subscribe((res) => {
					if (res) {
						this.list();
						this.toastr.success('Usuario eliminado');
					} else {
						this.toastr.warning('Ocurrio un error al eliminar el usuario');
					}
				});
			}
		});

	}
}
