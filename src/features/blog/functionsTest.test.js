// const { isAuthorValid, isContentValid, isTitleValid } = require("./validateForm");
import { isEmail, validateEmailInput } from "../auth/validation";
import { isAuthorValid, isContentValid, isTitleValid } from "./validateForm"

it("Should return false when Author is empty", () => {
    expect(isAuthorValid("      ")).toBe(false);
});

it("Should return false when Author is less than 5 characters", () => {
    expect(isAuthorValid("Alia")).toBe(false);
});


it("Should return true when Author is equal to or greater than 5 chars", () => {
    expect(isAuthorValid("Zeyad Mohamed")).toBe(true);
});

it("Should Return true if title is greater than 3 chars", () => {
    expect(isTitleValid("Programming")).toBe(true);
});

it("Should Return false if title empty", () => {
    expect(isTitleValid("      ")).toBe(false);
});


it("Should return true if content is greater than or equal to 15 chars", () => {
    expect(isContentValid("This is a valid content")).toBe(true);
});


it("Should return false if content is less than 15 chars", () => {
    expect(isContentValid("This is a")).toBe(false);
});


it("Should return false if content is empty", () => {
    expect(isContentValid("     ")).toBe(false);
});

//Signin Test cases

it("Should Return False if entered email is not a valid mail", () => {
    expect(validateEmailInput("notvalidmail.com")).toBe(false);
});


it("Shoud Return False if empty", () => {
    expect(validateEmailInput(" ")).toBe(false);
});


it("Shoud Return True if entered email is valid mail", () => {
    expect(validateEmailInput("valid@mail.com")).toBe(true);
});

it("testing email input in signin page", () => {
    expect(validateEmailInput("valid@mail.com")).toBe(true);
    expect(validateEmailInput("valid")).toBe(false);
});

//Signup test cases:
//full name cases
//Tc3
it("Shoud Return False if full name is empty", () => {
    expect(validateFullNameInput(" ")).toBe(false);
});

//Tc4

it("Shoud Return False if full name is less than 5 chacracter ", () => {
    expect(validateFullNameInput("muh")).toBe(false);
});

it("Shoud Return true if full name is greater than 5 chacracter and not empty ", () => {
    expect(validateFullNameInput("Muhammed")).toBe(true);
});

//Email cases same as in signin test cases

//Password cases:
it("Shoud Return False if password is empty", () => {
    expect(validatePasswordInput(" ")).toBe(false);
});

it("Shoud Return False if password is less than 8 character", () => {
    expect(validatePasswordInput("1234567")).toBe(false);
});

it("Shoud Return True if password is greater than 8 character and not empty", () => {
    expect(validatePasswordInput("123456789")).toBe(true);
});

//password confirmation cases:

it("Shoud Return False if password is empty", () => {
    expect(validatePassword2Input(" ")).toBe(false);
});

it("Shoud Return False if password2 does not match password 1", () => {
    expect(validatePassword2Input("12345678","12345689")).toBe(false);
});

it("Shoud Return False if password1 is empty and password2 less than 8", () => {
    expect(validatePassword2Input(" ","1234")).toBe(false);
});

it("Shoud Return False if password2 is empty and password1 less than 8", () => {
    expect(validatePassword2Input("1234"," ")).toBe(false);
});

it("Shoud Return False if password1 is greater than 8 character and password2 less than 8", () => {
    expect(validatePassword2Input("12345678","1234")).toBe(false);
});

it("Shoud Return False if password1 greater than 8 character and password2 does not match password1", () => {
    expect(validatePassword2Input("12345678","12345987")).toBe(false);
});

it("Shoud Return True if password1 matches password2", () => {
    expect(validatePassword2Input("12345","12345")).toBe(true);
});