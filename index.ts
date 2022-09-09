import {APIGatewayAuthorizerHandler, APIGatewayProxyEvent, Handler, APIGatewayRequestIAMAuthorizerHandlerV2} from 'aws-lambda'
import * as _ from 'lodash'

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayRequestIAMAuthorizerHandlerV2> => {
    const random = _.random(10)

    const response = {
        statusCode: '200',
        body: `The random value is ${random}`
    }

    return response;
};

