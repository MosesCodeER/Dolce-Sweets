function orderCheesecake(name, price) {
    let address = prompt("Please enter your shipping address:");
    if (address) {
        alert(`Order placed for ${name} at $${price}. It will be shipped to ${address}.`);
    } else {
        alert("Order cancelled. No address provided.");
    }
}