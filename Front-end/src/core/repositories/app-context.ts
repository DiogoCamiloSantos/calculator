import { Injectable } from "@angular/core";
import { Calculation } from "../models/calculation/Calculation.model";
import { AbstractParser } from "./parser";
const calculation = "calculation";

@Injectable()
export class AppContext {
    private calculation: StorageEntry<Calculation[]>;

    constructor(
        
    ) {
        this.calculation = new LocalStorageEntry<Calculation[]>(
            calculation
        );
    }

    public setCalculations(calculation: Calculation[]) {
        this.calculation.set(calculation);
    }

    public getCalculations(): Calculation[] {
        const storage = this.calculation.get() || [];
        
        const calculations = storage?.map((calcItem: any) => {
            const calculation = new Calculation(calcItem.number1, calcItem.number2);
            calculation.setId(calcItem.id);
            calculation.setStatus(calcItem.status);
            calculation.setResult(calcItem.result);
            calculation.setCreatedAt(calcItem.createdAt);

            return calculation;
        })  

        return calculations || [];
    }

    public clearCalculations() {
        this.calculation.remove();
    }
}

abstract class StorageEntry<T> {
    protected constructor(
        protected key: string,
        protected parser: AbstractParser<T> | any = null,
        private storage: Storage
    ) { }

    protected parse(entity: any): T | null {
        return this.parser.parse(entity);
    }

    get(): T | null {
        const entity = this.storage.getItem(this.key);
        if (entity) {
            const entityJson = JSON.parse(entity);
            if (this.parser) {
                return Array.isArray(entityJson)
                    ? this.parser.reparseList(entityJson)
                    : this.parser.reparse(entityJson);
            }
            return entityJson;
        }
        return null;
    }

    set(item: T) {
        this.storage.setItem(this.key, JSON.stringify(item));
    }

    remove() {
        this.storage.removeItem(this.key);
    }
}

class LocalStorageEntry<T> extends StorageEntry<T> {
    constructor(
         key: string,
         parser: AbstractParser<T> | any = null
    ) {
        super(key, parser, localStorage);
    }
}

class SessionStorageEntry<T> extends StorageEntry<T> {
    constructor(
         key: string,
         parser: AbstractParser<T> | any = null
    ) {
        super(key, parser, sessionStorage);
    }
}
