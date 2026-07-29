describe('Optional Parameter', function(){
    it('should Suppor Nul and Undefiend', function(){

        function sayHello(name?: string) {
            if(name){
                console.info(`Hello ${name}`);
            }else{
                console.info("Hello");
            }
        }

        sayHello("Eko");
        const name: string | undefined = undefined;
        sayHello(name);
    })
});