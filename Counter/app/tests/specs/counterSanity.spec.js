/**
 * Created by rotem on 28/08/2016.
 */
describe('Sanity', ()=>{
    const getCounterText = ()=>client.element('~Counter value text').getText();

    describe('Initial state', ()=>{
        it('Should have up button', ()=>{
            client.waitForVisible('~button Up',100000);
        });

        it('Should have down button', ()=>{
            client.waitForVisible('~button Down',100000);
        });

        it('Should start with value 0',()=>{
            client.waitForVisible('~Counter value text',100000);
            getCounterText().should.equal('0');
        })
    });

    describe('Functionality',()=>{
       it('Should move up by 1 when up clicked',()=>{
           client.waitForVisible('~button Up',100000);
           client.waitForVisible('~Counter value text',100000);
           var before = parseInt(getCounterText());
           client.element('~button Up').click();``
           getCounterText().should.equal((before + 1).toString());
       });

        it('Should move down by 1 when down clicked',()=>{
            client.pause(1000); // just for the demo
            client.waitForVisible('~button Down',100000);
            client.waitForVisible('~Counter value text',100000);
            var before = parseInt(getCounterText());
            client.element('~button Down').click();
            getCounterText().should.equal((before - 1).toString());
        });
    });
});