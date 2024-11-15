function isNationalIDValid(name, age, zip, password) {
	return age < password == name < zip;
}

console.log(isNationalIDValid("", 18, 69100, "hello"));
console.log(isNationalIDValid("John", 18, 69100, "amerty"));
    