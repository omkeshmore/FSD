const discountRate = 0.15;

let calculateBill = () => {

    let p1 = Number(document.getElementById("p1").value);
    let p2 = Number(document.getElementById("p2").value);
    let p3 = Number(document.getElementById("p3").value);
    let p4 = Number(document.getElementById("p4").value);

    let total = p1 + p2 + p3 + p4;

    let discount = 0;

    if (total > 23000) {
        discount = total * discountRate;
    }

    let finalAmount = total - discount;

    document.getElementById("result").innerHTML = `
        <p>Total Amount: ₹${total}</p>
        <p>Discount: ₹${discount}</p>
        <p>Final Payable Amount: ₹${finalAmount}</p>
    `;
};