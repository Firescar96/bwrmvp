contract MyUnit{
  /* Public variables of unit */
  string public name;
  uint256 public totalSupply;

  struct unitState {
    string unitQuality;
    uint256 timePicked;
    string unitVariety;
    address Holder;
    address Owner;
    bool Locked;
  }
  uint guid;
  mapping (uint256 => unitState) public Unit;
  mapping (address => []uint) public ownerUnitArray;
  mapping (address => []uint) public warehouseUnitArray;

  /* Function utilized to add units to the system.*/
  function addUnit(
    address _warehouseID,
    address _owner,
    uint _numOfUnits,
    string _unitQuality,
    uint _timePicked,
    string _unitVariety) {
    for(guid; guid < guid + _numOfUnits; guid++){
      Unit[guid] = unitState(_unitQuality,_timePicked, _unitVariety, _warehouseID, _owner, true);

      ownerUnitArray[_owner].length++;
      ownerUnitArray[_owner][ownerUnitArray[_owner].length-1] = Unit[guid];
      warehouseUnitArray[_warehouseID].length++;
      warehouseUnitArray[_warehouseID][warehouseUnitArray[_warehouseID].length-1] = Unit[guid];
    }
  }

  /*Tranfer Ownership of a unit*/
  function transferOwnership(
    address _newOwner,
    uint _guid){
    if (Unit[_guid].Owner == msg.sender){
      if(currentState.Locked){
        unitState currentState = Unit[_guid];
        Unit[_guid] = unitState(currentState.unitQuality, currentState.timePicked, currentState.unitVariety, currentState.Holder, _newOwner, currentState.Locked);
        ownerUnitArray[_newOwner].length++;
        ownerUnitArray[_newOwner][ownerUnitArray[_newOwner].length-1] = Unit[_guid];
      }
    }
  }

  /*Transferring physical unit to new warehouse*/
  function transferWarehouse(
    address _newwarehouseID,
    uint _guid){
      if(Unit[_guid].Holder == msg.sender){
        unitState currentState = Unit[_guid];
        Unit[_guid] = unitState(currentState.unitQuality, currentState.timePicked, currentState.unitVariety, _newwarehouseID, currentState.Owner, currentState.Locked);
        warehouseUnitArray[_newwarehouseID].length++
        warehouseUnitArray[_newwarehouseID][warehouseUnitArray[_newwarehouseID].length-1] = Unit[_guid];
      }
  }

  function() {
    throw;
  }
}
