contract Warehouse is owned{

    //Together these can be used as an iterable mapping
    //UnitStorage should only store units that are in this particular warehouse
    bytes32[]  UnitIdentifiers;
    mapping (bytes32 => Unit) UnitStorage;
    //These are Units that need to be accepted by a farmer
    mapping (bytes32 => Unit) UnitsInProcessing;

    //TODO: Straighten out exactly which attributes are wanted here
    //TODO: Address how identfier's will be chosen
    struct Unit {
        bytes32 identifier;
        string origin;
        string quality;
        uint timeOfInitialDeposit;
        string typeOfGood;
    }
    /*
    identifier: unique ID for each unit being stored
    origin: location of farm (can be as general or as specific as desired)
    quality: 0-100 scale, ABCDF scale, etc.  TBD later, preferrably to match current system
    timeOfInitialDeposit: moment when farmer brings crop to warehouse (unix time)
    typeOfGood: i.e. coffee, wheat, corn, etc.
    */

    function Warehouse() {

    }

    event ReceiptIssued (
        address _issuedTo,
        bytes32 _identifier
        //TODO: Think over how that would effect auditing
    );

    function issueInitialReceipt(address _receiver, bytes32 _identifier, string _origin, string _quality, string _typeOfGood) {
        //TODO: how do we define this
        bytes32 _identifier;
        a = Unit {
            _identifier,
            _origin,
            _quality,
            now,
            _typeOfGood
        };
        UnitIdentifiers.push(_identifier);
        UnitsInProcessing[_identifier] = a;
        //TODO: send this to the user contract
    }

    function sendUnits() {

    }


    //Contract does not accept ether by default
    function() {
        throw;
    }
}
