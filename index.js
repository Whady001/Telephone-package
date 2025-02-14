const TelephoneNumbers = [];
//const Observer = [];
class Telephone {
    constructor (phoneNumber) {
        this.phoneNumber = phoneNumber;
        this.observers = []
    }

    //Add phone number
    addPhoneNumber(phoneNumber) {
        if (!(TelephoneNumbers.includes(phoneNumber))) {
            TelephoneNumbers.push(phoneNumber)
        } else {
            return "This phone number is already saved";
        }
    }

    //Remove phone number
    removePhoneNumber(phoneNumber) {
        const phoneNumberPosition = TelephoneNumbers.indexOf(phoneNumber);
        if (TelephoneNumbers.includes(phoneNumber) === true) {       
        TelephoneNumbers.splice(phoneNumberPosition, 1);
        console.log(`${phoneNumber} was removed successfully.`)
        } else {
        console.log("This number is not saved");
       } 
        
    }

    //Dial phone number
    dialPhoneNumber(phoneNumber) {
        if (TelephoneNumbers.includes(phoneNumber)) {
        console.log("Dialing " + phoneNumber);
        this.notifyObservers(phoneNumber);
        } else {
            console.log("Add phone number first");
        }
    }

    //Method to add observer
    addObserver (observer) {
        this.observers.push(observer);
    }

    //Method to remove observer
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs != observer);
    }

    //Method to notify all observers
    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.update(phoneNumber));
    }

};

//Observer class
class Observer {
    constructor(name) {
        this.name = name;
    }
    update(phoneNumber) {
        console.log(`${this.name} received update: ${phoneNumber} `);
    }
}

//Observer class that prints special message
class SpecialObserver {
    constructor(){}

    //method that prints special message
    update(phoneNumber) {
        console.log("Now dialing " + phoneNumber);
    }
}

//Example 
const telephone = new Telephone();
const observer1 = new Observer("Observer 1");
const specialObserver = new SpecialObserver();

//Add observers
telephone.addObserver(observer1);
telephone.addObserver(specialObserver);

//Add phone numbers
telephone.addPhoneNumber("2347023232");
telephone.addPhoneNumber("0123456789");

//Remove phone number
telephone.removePhoneNumber("0123456789");

//Dial phone number
telephone.dialPhoneNumber("2347023232");

