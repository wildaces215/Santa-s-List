pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Santa is ERC20 {
    address public owner;
    struct Person{
        string name;
        bool naughty;
    }

    event newPersonEvent(string _message);
    event changed(string _person, string _message);
    
    Person[] public people;
    constructor() public  payable{
     owner = msg.sender;
    }

    function newPerson(string memory name,bool _naughty) public  {
      Person memory _person;
     _person = Person(name,_naughty);
     people.push(_person);
     emit newPersonEvent(_person.name);
    }

    function getAllPeople() public view returns (Person[] memory) {
        return people;
    }
     
    function change(address payer,string memory name,uint256 amount) public payable {
        require(address(payer).balance > 0,
        "Your wallet is empty!");

        transferFrom(payer, msg.sender, amount);
        emit changed(name,"has changed");
         
    }
}
