function Sale(price){
    this.price = (price > 0)|| 100;
    this.decorators_list = [];
}

Sale.decorators= {};

Sale.decorators.serviceFee = {
    getPrice: function(price) {
        price += price * 1 / 10;
        return price;
    }
};

Sale.decorators.tax = {
    getPrice: function(price) {
        price += price * 2 / 10;
        return price;
    }
};

Sale.decorators.money = {
    getPrice: function(price) {
        return "AZN " + price;
    }
};

Sale.prototype.decorate = function (decorator) {
    this.decorators_list.push(decorator);
};

Sale.prototype.getPrice = function () {
    var price = this.price,
        i,
        max = this.decorators_list.length,
        name;
    for (i = 0; i < max; i += 1) {
        name = this.decorators_list[i];
        price = Sale.decorators[name].getPrice(price);
    }
    return price;
};

var sale = new Sale(100);

sale.decorate("serviceFee");
sale.decorate("tax");
sale.decorate("money");

var result = sale.getPrice();

console.log(result);