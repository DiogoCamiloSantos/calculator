import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { environment } from "src/environment/environment";
import { Calculation } from "../../models/calculation/Calculation.model";
import { catchError, map } from "rxjs/operators";
import CalculationRepository from "src/core/repositories/calculation/Calculation.repository";
import { of } from "rxjs";

@Injectable()
export default class CalculationService {
    private url: string;
    constructor(
        private http: HttpClient,
        private calculationRepository: CalculationRepository,
        private matSnackBar: MatSnackBar,
    ) {
        this.url = environment.url; 
    }

    send(calc: Calculation) {
        return this.http.post(this.url.concat('calc/sync'), calc).pipe(
            map((response: any) => {            
                calc.setId(response.Id);
                calc.setCreatedAt(response.CreatedAt);
                this.calculationRepository.save(calc);
                this.matSnackBar.open('Solicitação de soma enviada!', 'Fechar', {
                    duration: 5000
                }); 
            })
        );
    }

    getResult(id: string) {
        return this.http.get(this.url.concat(`calc/get-result/${id}`)).pipe(
            map((response: any) => {  
                const calculation = new Calculation(response.number1, response.number2);         
                calculation.setId(id); 
                calculation.setResult(response.result);

                if (calculation.getResult() == null ) {
                    this.matSnackBar.open('Soma ainda não realizada. Tente novamente mais tarde!', 'Fechar', {
                        duration: 5000
                    }); 
                    return;
                }

                this.calculationRepository.update(calculation);
                this.matSnackBar.open('Soma realizada!', 'Fechar', {
                    duration: 5000
                }); 
            }),
            catchError((error) => {
                this.matSnackBar.open('Registro de cálculo não encontrado!', 'Fechar', {
                    duration: 5000
                });

                return of(error);             
            })
        );
    }

    getHistoric(): Calculation[] {        
        return this.calculationRepository.getHistoric();
    }
}
