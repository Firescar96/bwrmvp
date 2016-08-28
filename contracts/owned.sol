contract owned {
    address owner;

    function owned() {
        owner = msg.sender;
    }

    function setOwner(address addr) {
        if (msg.sender != owner){
            throw;
        }
        owner = addr;
    }

    function getOwner() returns(address _addr) {
        return owner;
    }

    modifier isOwner {
        if (msg.sender == owner){
            _
        }
    }
}
