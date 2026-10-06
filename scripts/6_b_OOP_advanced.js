// Let's imagine a university
// Everyone in the university is a member of their website 


// BASE class -> Gives the base schema for every member entity of the university like
    // students, teachers, other staff, etc
class Member{
    // A static variable belongs to the class, we don't need an object to see value
    static memberCount = 0;

    // Let's design the schema for each and every member of the university
    constructor(id, name, email){
        // initializing basic information
        this.id = id;
        this.name = name;
        this.email = email;

        // For every member constructed, increment memberCount
        Member.memberCount++;
    }

    // auth
    login(){
        console.log(`${this.name} logging in...`);
    }

    logout(){
        console.log(`${this.name} logging out...`);
    }

    displayInfo(){
        console.log(`_`.repeat(50));
        console.log(`ID\t:\t${this.id}`);
        console.log(`Name\t:\t${this.name}`);
        console.log(`Email\t:\t${this.email}`);
    }

    static getMemberCount() {
        // This method belongs to the class.
        return Member.memberCount;
    }
}

const m1 = new Member();
m1.displayInfo();

const m2 = new Member(1234, "Molli", "molli@gmail.com");
m2.displayInfo();
