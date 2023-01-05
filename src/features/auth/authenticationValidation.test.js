//Signup test cases:
//full name cases
//Tc3
import {validateFullNameInput, validatePassword2Input, validatePasswordInput} from "./validation";

it("Should Return False if full name is empty", () => {
  expect(validateFullNameInput(" ")).toBe(false);
});


//Tc4
it("Should Return False if full name is less than 5 chacracter ", () => {
  expect(validateFullNameInput("muh")).toBe(false);
});

it("Should Return true if full name is greater than 5 chacracter and not empty ", () => {
  expect(validateFullNameInput("Muhammed")).toBe(true);
});

//Email cases same as in signin test cases

//Password cases:
it("Should Return False if password is empty", () => {
  expect(validatePasswordInput(" ")).toBe(false);
});

it("Should Return False if password is less than 8 character", () => {
  expect(validatePasswordInput("1234567")).toBe(false);
});

it("Should Return True if password is greater than 8 character and not empty", () => {
  expect(validatePasswordInput("123456789")).toBe(true);
});

//password confirmation cases:

it("Should Return False if password is empty", () => {
  expect(validatePassword2Input(" ")).toBe(false);
});

it("Should Return False if password2 does not match password 1", () => {
  expect(validatePassword2Input("12345678", "12345689")).toBe(false);
});

it("Should Return False if password1 is empty and password2 less than 8", () => {
  expect(validatePassword2Input(" ", "1234")).toBe(false);
});

it("Should Return False if password2 is empty and password1 less than 8", () => {
  expect(validatePassword2Input("1234", " ")).toBe(false);
});

it("Should Return False if password1 is greater than or equal to 8 character and password2 less than 8", () => {
  expect(validatePassword2Input("12345678", "1234")).toBe(false);
  expect(validatePassword2Input("123456789", "1234")).toBe(false);
});

it("Should Return False if password1 greater than or equal to 8 character and password2 does not match password1", () => {
  expect(validatePassword2Input("12345678", "12345987")).toBe(false);
});


it("Shoud Return False if password1 matches password2", () => {
  expect(validatePassword2Input("12345", "12345")).toBe(false);
});


it("Shoud Return True if password1 matches password2 and both of them greater than 8 character", () => {
  expect(validatePassword2Input("12345678", "12345678")).toBe(true);
});
