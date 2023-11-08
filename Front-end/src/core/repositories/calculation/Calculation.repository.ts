import { Injectable } from "@angular/core";
import { Calculation } from "src/core/models/calculation/Calculation.model";
import { AppContext } from "../app-context";

@Injectable()
export default class CalculationRepository {

    constructor(private appContext: AppContext) {
        
    }

    getHistoric(): Calculation[] {        
        return this.appContext.getCalculations();
    }

    save(calculation: Calculation) {
        const list = this.appContext.getCalculations();
        list?.unshift(calculation);
        this.appContext.setCalculations(list || []);
    }

    update(calculation: Calculation) {
        const list = this.appContext.getCalculations();
        const index = list?.findIndex(c => c.getId() === calculation.getId());

        list[index].setResult(calculation.getResult());

        this.appContext.setCalculations(list || []);
    }

    delete(calculation: Calculation) {
        const list = this.appContext.getCalculations();
        const index = list?.findIndex(c => c.getId() === calculation.getId());

        this.appContext.setCalculations(list?.splice(index, 1) || []);
    }

    deleteAll() {
        this.appContext.setCalculations([]);
    }
}