import { IncomingMessage, ServerResponse } from 'http';

export const sendResponse = (
    res: ServerResponse,
    statusCode: number,
    data: any,
    contentType: string = 'application/json'
) => {
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.end(JSON.stringify(data));
};

export const parseRequestBody = (req: IncomingMessage): Promise<any> => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (error) {
                reject(error);
            }
        });
    });
};