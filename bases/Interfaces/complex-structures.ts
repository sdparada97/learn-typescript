(() => {

    interface Person {
        name: string;
        age?: number;
        address: Address;

        getFullAddress(): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Person = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 12323,
            zip: 'QWEFE 132',
            city: 'Bogota'
        },

        getFullAddress(): string{
            return `${this.address.city} - ${this.address.id} : ${this.address.zip}`
        }
    }

    const client2: Person = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 45634,
            zip:'AWDF EFE',
            city:'Medellin'
        },

        getFullAddress(): string{
            return `${this.address.city} - ${this.address.zip}`
        }
    }

    // console.log(client.getFullAddress());
    // console.log(client2.getFullAddress());

    /* YOU CAN'T INSTANCE AN INTERFACE */
    
})()