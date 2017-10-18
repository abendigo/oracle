let Oracle = artifacts.require("./Oracle.sol");

contract('Oracle', function(accounts) {
  console.log('accounts', accounts)

  it("logs when message request events are recieved", function(done) {
    Oracle.deployed().then(function(instance) {
      let events = instance.GetDailyCandle();
      events.watch(function(error, result) {

        console.log('result', result.args)
        console.log(result.args.timestamp.toNumber());

        // assert.equal(result.args.to, "+1555-555-5555");
        // assert.equal(result.args.body, "Test");
        events.stopWatching();
        done();
      });

      instance.getDailyCandle("USD/CAD", Date.now());
    });
  });
});
