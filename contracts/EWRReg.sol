contract EWRReg{
  /* Public variables of unit */
  string public name;
  uint256 public totalSupply;

  struct EWR {
    uint[] guids;
    address owner;
    address warehouse;
    uint date;
    bool ownerVerification;
    bool warehouseVerification;
  }
  mapping(address => EWR[]) ownerEWRArray;
  mapping(address => EWR[]) warehouseEWRArray;
  mapping(uint => EWR) ewrByGuid;

  /* Function utilized to add units to the system.*/
  function createEWR(
    uint[] _guids,
    address _owner
    address _warehouse) {
      EWR newEWR = EWR(_guids, _warehouse, _warehouse, now);
      ownerEWRArray[_owner].length++;
      ownerEWRArray[_owner][ownerEWRArray[_owner].length-1] = newEWR;
      warehouseEWRArray[_warehouse].length++;
      warehouseEWRArray[_warehouse][warehouseEWRArray[_warehouse].length-1] = newEWR;
      for(uint i = 0; i < _guids.length; i++) ewrByGuid[_guids[i]] = newEWR;
    }
  }

  function verifyOwner(_guid) {
    ewrByGuid[_guid].ownerVerification = true;
  }

  function verifyWarehouse(_guid) {
    ewrByGuid[_guid].warehouseVerification = true;
  }

  function() {
    throw;
  }
}
