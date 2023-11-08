import { NextFunction, Request, Response } from "express";
import { Calculation } from "../../models/calculation/Calculation.model";
import CalculationRepository from "../../repositories/calculation/CalculationRepository";
import { AmqpService } from "../../services/AmqpService";
import { AmqpQueueName } from "../../models/Amqp/Amqp.enum";
import { log } from "console";

const CalcSync = async (request: Request, response: Response, next: NextFunction) => {
    const calculationRepository = new CalculationRepository();
    const amqpService = new AmqpService();
    const calculation = new Calculation(request.body.number1, request.body.number2);

    const createdData = await calculationRepository.insert(calculation);

    amqpService.sendMessageToQueue({
        FromId: createdData._id,
    }, AmqpQueueName.Messages);

    log(createdData);

    response.status(200).json({ Id: createdData._id, CreatedAt: createdData.createdAt });
};

const GetResultById = async (request: Request, response: Response, next: NextFunction) => {
    const repository = new CalculationRepository();
    const calculation = await repository.selectBy(request.params.id);

    if (!calculation)
        response.status(404).json("Calculation is not found!!");
    
    response.status(200).json(calculation);
};

export {
    CalcSync,
    GetResultById
};

