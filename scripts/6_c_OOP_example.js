// Let's imagine an E-commerce website with 4 types of users.
// Lets do the OOP design for the same.

// CONSTANTS

const ROLE = Object.freeze({
    CUSTOMER: "CUSTOMER",
    SELLER: "SELLER",
    ADMIN: "ADMIN",
    SUPPORT: "SUPPORT"
});

const PERMISSION = Object.freeze({
    PRODUCT_READ: "PRODUCT_READ",
    PRODUCT_CREATE: "PRODUCT_CREATE",
    PRODUCT_UPDATE_OWN: "PRODUCT_UPDATE_OWN",
    PRODUCT_UPDATE_ANY: "PRODUCT_UPDATE_ANY",
    PRODUCT_DELETE_ANY: "PRODUCT_DELETE_ANY",
    USER_MANAGE: "USER_MANAGE",
    CART_MANAGE: "CART_MANAGE",
    ORDER_CREATE: "ORDER_CREATE",
    ORDER_READ_OWN: "ORDER_READ_OWN",
    ORDER_READ_ANY: "ORDER_READ_ANY",
    SALES_READ_OWN: "SALES_READ_OWN"
});

// RBAC - Role Based Access Control
const ROLE_PERMISSIONS = Object.freeze({
    [ROLE.CUSTOMER]: [
        PERMISSION.PRODUCT_READ,
        PERMISSION.CART_MANAGE,
        PERMISSION.ORDER_CREATE,
        PERMISSION.ORDER_READ_OWN
    ],
    [ROLE.SELLER]: [
        PERMISSION.PRODUCT_READ,
        PERMISSION.PRODUCT_CREATE,
        PERMISSION.PRODUCT_UPDATE_OWN,
        PERMISSION.SALES_READ_OWN
    ],
    [ROLE.ADMIN]: [
        Object.values(PERMISSION)
    ],
    [ROLE.SUPPORT]: [
        PERMISSION.PRODUCT_READ,
        PERMISSION.ORDER_READ_ANY
    ],
})

// Custom errors:

class AppError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ValidationError extends AppError { }
class AuthorizationError extends AppError { }
class NotFoundError extends AppError { }
class InsufficientError extends AppError { }


// Authorization Service - RBAC checks

class AuthorizationService {
    // static method for checking permissions of given user
    static hasPermission(user, permission) {
        if (!(user instanceof User)) {
            return false;
        }

        const permissions = ROLE_PERMISSIONS[user.role];
        return permissions?.includes(permission) ?? false;
    }

    // static method to help declare when certain features requires certain permission
    static requirePermission(user, permission) {
        if (!this.hasPermission(user, permission)) {
            throw new AuthorizationError(
                `${permission} denied for role ${user.role ?? "UNKNOWN"}`
            );
        }
    }
    // Requiring either the owner or someone having higher authority(like admin)
    static requireOwnerOrPermission(user, ownerId, ownPermission, anyPermission) {
        if (user.id === ownerId && this.hasPermission(user, ownPermission)) { return; }
        this.requirePermission(user, anyPermission);
    }
}
// Abstract User

class User{
    // Datafields
    #id;
    #name;
    #email;
    #role;
    #active;

    constructor({id, name, email, role}){
        // This User class is Abstract. This must not be used for creating actual users.
        if (new.target === User){
            throw new Error("User is an abstract class")
        }
        if (!id || !name || !email || !role ){
            throw new ValidationError("All user fields must be filled.")
        }
        if (!Object.hasOwn(ROLE_PERMISSIONS, role)){
            throw new ValidationError(`Invalid role : ${role}`);
        }

        this.#id = id;
        this.#name = name;
        this.#email = email;
        this.#role = role;
        this.#active = true;
    }

    // getter methods for attributes
    get id(){
        return this.#id;
    }
    get name(){
        return this.#name;
    }
    get email(){
        return this.#email;
    }
    get role(){
        return this.#role;
    }
    get isActive(){
        return this.#active;
    }
    deactivate(){
        this.#active = false;
    }

}
class PrimeUser extends User{};
const u1 = new PrimeUser({
    id: 1,
    name : "molli",
    email :"molli@gmail.com",
    role: ROLE.ADMIN
});
console.log(u1.id);
u1.id = 12;
console.log(u1.id);
console.log(u1.isActive);
u1.deactivate();
console.log(u1.isActive);