class Contact {
    constructor(FullName, PhoneNumber, EmailAddress) {
        this.setName(FullName);
        this.setNumb(PhoneNumber);
        this.setEmail(EmailAddress);
    }

    setName(FullName)
    {
        this.FullName = FullName;
    }
    getName()
    {
        return this.FullName;
    }

    setNumb(PhoneNumber)
    {
        this.PhoneNumber = PhoneNumber;
    }
    getNumb()
    {
        return this.PhoneNumber;
    }

    setEmail(EmailAddress)
    {
        this.EmailAddress = EmailAddress;
    }
    getEmail()
    {
        return this.EmailAddress;
    }

    toString(){
        return "Name: " + this.getName() + "\nNumber: " + this.getNumb() + "\nEmail: " + this.getEmail();

    }

    serialize(){
            if (this.FullName != "" && this.PhoneNumber != "" && this.EmailAddress != ""){
                return `${this.FullName}, ${this.PhoneNumber}. ${this.EmailAddress}`;
            }
        console.error("One or more of the properties of the contact object are mising or invalid");
        return null;
    }

    deserialize(data){
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.PhoneNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }
}

