import { NgModule } from "@angular/core";
import { ToastErrorComponent } from "./toast-error/toast-error.component";
import { ToastLoadingComponent } from "./toast-loading/toast-loading.component";
import { ToastSuccessComponent } from "./toast-success/toast-success.component";
import { ToastWarningComponent } from "./toast-warning/toast-warning.component";
import { ToastrModule } from "ngx-toastr";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    ToastErrorComponent,
    ToastLoadingComponent,
    ToastSuccessComponent,
    ToastWarningComponent,
  ],
  declarations: [
    ToastErrorComponent,
    ToastLoadingComponent,
    ToastSuccessComponent,
    ToastWarningComponent,
  ],
  entryComponents: [
    ToastErrorComponent,
    ToastLoadingComponent,
    ToastSuccessComponent,
    ToastWarningComponent,
  ],
})
export class ToastModule {}
