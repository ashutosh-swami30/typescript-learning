// The new standard uses (originalMethod, context)
function Log(originalMethod: any, context: ClassMethodDecoratorContext) {
    const methodName = String(context.name);

    function replacementMethod(this: any, ...args: any[]) {
        console.log(`LOG: Calling ${methodName} with:`, args);
        const result = originalMethod.call(this, ...args);
        return result;
    }

    return replacementMethod;
}

class Rocket {
    @Log
    launch(destination: string) {
        return `🚀 Heading to ${destination}!`;
    }
}

