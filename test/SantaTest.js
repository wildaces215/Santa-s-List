const Santa = artifacts.require('Santa');


contract('Santa', accounts => {
    let contract;
    let ownerAddress = accounts[0];
    let payer = accounts[1];
    beforeEach(async () => {
        contract = await Santa.new({ from: ownerAddress, gasPrice: 0, value: 1 })
    })

    describe('Basic Functions', () => {
        it("Should add a new person to the array", async () => {
            const santaContract = await Santa.deployed();

            await santaContract.newPerson("Sally", 0);
        });

        it("Get all People in the array", async () => {
            const santaContract = await Santa.deployed();
            await santaContract.newPerson("Sally", 0);
            await santaContract.newPerson("Mike", 1);
            await santaContract.newPerson("Craig", 0);
            let people = await santaContract.getAllPeople.call();
            console.log(people);

        });
        it("Should take away from payer", async () => {

        })
    })


})