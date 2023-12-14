import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    await sleep(30000);
    context.log('30s...');
    await sleep(60000);
    context.log('90s...');
    await sleep(60000);
    context.log('150s...');
    await sleep(60000);
    context.log('210s...');

    context.res = {
        body: "HttpTrigger2"
    };
};

export default httpTrigger;
