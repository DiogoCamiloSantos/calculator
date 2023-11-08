import { ObjectId, Timestamp } from "mongodb";
import { CalculationStatus } from "../../models/calculation/CalculationStatus.enum";

export interface ICalculationSchema {
    id: ObjectId;
    number1: Number;
    number2: Number;
    result: Number;
    createdAt: Date,
    updatedAt: Date,
    status: {
        type: Number,
        enum: [CalculationStatus.Pending, CalculationStatus.Done, CalculationStatus.Error],
        default: CalculationStatus.Pending
    }
}
