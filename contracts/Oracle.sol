pragma solidity ^0.4.15;

contract Oracle {
    event GetDailyCandle(string instrument, uint64 timestamp);

    function getDailyCandle(string instrument, uint64 timestamp) {
        GetDailyCandle(instrument, timestamp);
    }
}
