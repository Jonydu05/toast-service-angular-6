import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ToastSuccessComponent } from "./toast-success/toast-success.component";
import { ToastErrorComponent } from "./toast-error/toast-error.component";
import { ToastWarningComponent } from "./toast-warning/toast-warning.component";
import { ToastLoadingComponent } from "./toast-loading/toast-loading.component";

/**
 * Serviço responsável por exibir mensagens de toast.
 */
@Injectable({
  providedIn: "root",
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  public errorMessage: string = 'Algo de errado aconteceu, tente novamente mais tarde.'

  /**
   * Exibe uma mensagem de sucesso.
   * @param message A mensagem a ser exibida.
   * @param closeBtn (Opcional) Indica se o botão de fechar deve ser exibido. O valor padrão é true.
   */
  success(message: string, closeBtn?: boolean) {
    this.show(message, ToastSuccessComponent, closeBtn, "toast--success");
  }

  /**
   * Exibe uma mensagem de erro.
   * @param message A mensagem a ser exibida.
   * @param closeBtn (Opcional) Indica se o botão de fechar deve ser exibido. O valor padrão é true.
   */
  error(message: string, closeBtn?: boolean) {
    this.show(message, ToastErrorComponent, closeBtn, "toast--error");
  }

  /**
   * Exibe uma mensagem de aviso.
   * @param message A mensagem a ser exibida.
   * @param closeBtn (Opcional) Indica se o botão de fechar deve ser exibido. O valor padrão é true.
   */
  warning(message: string, closeBtn?: boolean) {
    this.show(message, ToastWarningComponent, closeBtn, "toast--warning");
  }

  /**
   * Exibe uma mensagem de carregamento.
   * @param message A mensagem a ser exibida.
   * @param closeBtn (Opcional) Indica se o botão de fechar deve ser exibido. O valor padrão é true.
   */
  loading(message: string, closeBtn?: boolean) {
    this.show(message, ToastLoadingComponent, closeBtn, "toast--loading");
  }

  private show(
    message: string,
    toastComponent: any,
    closeBtn: boolean = true,
    toastClass: string
  ) {
    const opt = this.toastr.toastrConfig;
    opt.toastComponent = toastComponent;
    opt.closeButton = closeBtn;
    opt.toastClass = toastClass;
    // opt.disableTimeOut = true;
    opt.tapToDismiss = false;
    opt.positionClass = "toast-container";
    this.toastr.show(message, null, opt);
  }
}
