import mongoose, { Model } from "mongoose";
import { Calculation } from "../../models/calculation/Calculation.model";
import { ObjectId, Timestamp } from "mongodb";
import { CalculationStatus } from "../../models/calculation/CalculationStatus.enum";
import { ICalculationSchema } from "./CalculationSchema.interface";
import { log } from "console";

export default class CalculationRepository {

    private CalculationModel: Model<ICalculationSchema>;
    private static schema = new mongoose.Schema<ICalculationSchema>({
        id: ObjectId,
        number1: Number,
        number2: Number,
        result: Number,
        createdAt: { type: Date },
        updatedAt: { type: Date },
        status: {
            type: Number,
            enum: [CalculationStatus.Pending, CalculationStatus.Done, CalculationStatus.Error],
            default: CalculationStatus.Pending
        }
    }, {
        versionKey: false, 
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    });

    constructor() {
        this.CalculationModel = mongoose.model('Calculation', CalculationRepository.schema);
    }

    async insert(calculation: Calculation) {
        return await this.CalculationModel.create({
            number1: calculation.getNumber1(),
            number2: calculation.getNumber2()
        });
    }

    async selectBy(id: string | number): Promise<Calculation> {
        const model = await this.CalculationModel.findById(new ObjectId(id)).exec();
        
        if (!model) 
            return;
        

        const calculation = new Calculation(model.number1, model.number2);
        calculation.setStatus(Number(model.status));
        calculation.setResult(Number(model.result));

        log(model)

        return calculation;
    }
}
