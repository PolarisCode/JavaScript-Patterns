function Sale(price) {
    this.price = price || 100;
}

Sale.prototype.getPrice = function() {
    return this.price;
};

Sale.decorators = {};

Sale.decorators.serviceFee = {
    getPrice: function() {
        var price = this.uber.getPrice();
        price += price * 1 / 10;
        return price;
    }
};

Sale.decorators.tax = {
    getPrice: function() {
        var price = this.uber.getPrice();
        price += price * 2 / 10;
        return price;
    }
};


Sale.decorators.money = {
    getPrice: function() {
        return "AZN " + this.uber.getPrice().toFixed(2);
    }
};

Sale.prototype.decorate = function(decorator) {
    var F = function() {},
        overrides = this.constructor.decorators[decorator],
        i, newobj;
    F.prototype = this;
    newobj = new F();
    newobj.uber = F.prototype;
    for (i in overrides) {

        if (overrides.hasOwnProperty(i)) {
            newobj[i] = overrides[i];
        }
    }

    return newobj;
};

var sale = new Sale(100);

sale = sale.decorate("serviceFee");
sale = sale.decorate("tax");
sale = sale.decorate("money");

var result = sale.getPrice();

console.log(result);