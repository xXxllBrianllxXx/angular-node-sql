import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './components/user/user.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
	declarations: [
		AppComponent,
		UserComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		CommonModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot({
			timeOut: 8000,
			positionClass: 'toast-top-right',
			preventDuplicates: true,
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
