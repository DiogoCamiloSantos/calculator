import { CalculationStatus } from "./CalculationStatus.enum";

export class Calculation {

    private id?: string = "";
    private number1: Number;
    private number2: Number;
    private result?: Number;
    private status?: CalculationStatus;
    private createdAt: Date;

    public getCreatedAt(): Date {
        return this.createdAt;
    }
    
    public setCreatedAt(cratedAt: Date): void {
        this.createdAt = cratedAt;
    }
    
    public getId(): string {
        return this.id || "";
    }
    
    public setId(id: string): void {
        this.id = id;
    }    
    
    constructor(number1: Number, number2: Number) {
        this.number1 = number1;
        this.number2 = number2;
    }
    
    public getNumber1(): Number {
        return this.number1;
    }

    public getNumber2(): Number {
        return this.number2;
    }

    public getResult(): Number | undefined {
        return this.result;
    }

    public setNumber1(number1: Number): void {
        this.number1 = number1;
    }

    public setNumber2(number2: Number): void {
        this.number2 = number2;
    }

    public setResult(result: Number | undefined): void {
        this.result = result;
    }
    
    public getStatus(): CalculationStatus | undefined {
        return this.status;
    }

    public setStatus(calculationStatus: CalculationStatus): void {
        this.status = calculationStatus;
    }
}
