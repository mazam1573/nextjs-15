import { NextResponse } from "next/server";
import { RequestError, ValidationError } from "../http-errors";
import { ZodError } from "zod";
import logger from "../logger";

export type ResposeType = 'api' | 'server';

const formateResponse = (
    responseType: ResposeType,
    status: number,
    message: string,
    errors?: Record<string, string[]> | undefined
) => {
    const responseContent = {
        success: false,
        error: {
            message,
            details: errors,
        }
    };

    return responseType === 'api' ? NextResponse.json(responseContent, { status }) : { status, ...responseContent }
}

export const handleErrors = (error: unknown, responseType: ResposeType = "server") => {
    if (error instanceof RequestError) {
        logger.error({ err: error }, `${responseType.toUpperCase()} Error: ${error.message}`)
        return formateResponse(responseType, error.statusCode, error.message, error.errors);
    }

    if (error instanceof ZodError) {
        const validationError = new ValidationError(error.flatten().fieldErrors as Record<string, string[]>);
        logger.error({ err: error }, `Validation Error: ${validationError.message}`)
        return formateResponse(responseType, validationError.statusCode, validationError.message, validationError.errors);
    }

    if (error instanceof Error) {
        logger.error(error.message)
        return formateResponse(responseType, 500, error.message);
    }

    logger.error({ err: error }, "An unexpected error occured")
    return formateResponse(responseType, 500, "An unexpected error occurred");
}

export default handleErrors;