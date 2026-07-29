import { sayHello } from "../src/say-hello";

describe('sayHello', function(){
    it('should return Say Hello', function(){
        const name  = sayHello("Eko");
        expect(name).toBe("Hello Eko");
    });
});