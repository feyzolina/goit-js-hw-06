// Bir initialValue parametresi alan bir StringBuilder sınıfı yazın - oluşturulan nesnenin value özel özelliğine yazılan rastgele bir dize.
// Aşağıdaki sınıf metodlarını tanımlayın:
// getValue() - value özel özelliğinin geçerli değerini döndürür.
// padEnd(str) - str(dize) parametresini alır ve bu metodu çağıran nesnenin value özel özelliğinin değerinin sonuna ekler.
// padStart(str) - str(string) parametresini alır ve bu metodu çağıran nesnenin value özel özelliğinin değerinin başlangıcına ekler.
// padBoth(str) - str(dize) parametresini alır ve bu yöntemi çağıran nesnenin value özel özelliğinin değerinin başına ve sonuna ekler.

class StringBuilder {
    #value
    constructor(initialValue) {
        this.#value = initialValue;
    }
    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value += (str);
    }
    padStart(str) {
        this.#value = str + this.#value;
    }
    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
