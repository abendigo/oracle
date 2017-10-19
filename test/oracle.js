let Oracle = artifacts.require("./Oracle.sol");

contract('Oracle', function(accounts) {
  // console.log('accounts', accounts)

  before(function() {
    console.log('befiore')
  });

  beforeEach(function() {
    console.log('befioreEach')
  });
  after(function() {
    console.log('after')
  });

  afterEach(function() {
    console.log('afterEach')
  });

  it("logs when message request events are recieved", function(done) {
    Oracle.deployed().then(function(instance) {
      let events = instance.GetDailyCandle();

      instance.getDailyCandle("USD/CAD", 6);
      

      events.watch(function(error, result) {

        console.log('result a', result.args)
        console.log(result.args.timestamp.toNumber());

        // assert.equal(result.args.to, "+1555-555-5555");
        // assert.equal(result.args.body, "Test");
        events.stopWatching();
        done();
      });

      instance.getDailyCandle("USD/CAD", 1);
    });
  });

  it("two", function(done) {
    Oracle.deployed().then(function(instance) {
      let events = instance.GetDailyCandle();

      let foo = new Promise((resolve, reject) => {
        events.watch(function(error, result) {
          resolve(result);
        });
      })
      // let foo = util.promisify(events.watch);
    //  events.watch(function(error, result) {

      foo.then(result => {
        console.log('result b', result.args)
        console.log(result.args.timestamp.toNumber());

        // assert.equal(result.args.to, "+1555-555-5555");
        // assert.equal(result.args.body, "Test");
        events.stopWatching();
        done();
      });

      instance.getDailyCandle("USD/CAD", 2); //Date.now());
    });
  });
});
/*
contract('Oracle', function(accounts) {
  console.log('accounts', accounts)
  it("three", async function() {
    // Arrange
    let instance = await Oracle.deployed();

    let foo = new Promise((resolve, reject) => {
      let events = instance.GetDailyCandle({timestamp: 1111});
      events.watch(function(error, result) {
        console.log('========', error, result)

        events.stopWatching();
        resolve(result);
      });
    });
    // Act
    instance.getDailyCandle("USD/CAD", 1121); //Date.now());

      // foo.then(result => {
      //   console.log('xxxxxxx', result)
      //   return result;
      // })

      let bar = await foo;
      console.log('bar', bar)

    // Assert
    
    

    // Restore
    events.stopWatching();
  });
});
*/  
