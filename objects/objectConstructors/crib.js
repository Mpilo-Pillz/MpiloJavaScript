var cribParams = {
    suburb: "Oakdene",
    bedrooms: '1',
    purpose: 'moms stays there',
    paidOff: true,
    taxClaimable: false
}

function Crib(params) {
    this.suburb = params.suburb;
    this.bedrooms = params.bedrooms;
    this.purpose = params.purpose;
    this.paidOff = params.paidOff;
    this.taxClaimable = params.taxClaimable;

    this.payLoan = function() {
        if(!this.paidOff) {
            console.log("every month the bank shall debit money form account");
        } else {
            console.log("vrib has been paid off do you want to use to finance anothe rinvestment?");
        }
    }

    if(this.taxClaimable) {
        console.log('YOu can claim the expenses form the taxman');
    } else {
        console.log('this is not an investment house you cant claim tax');
    }
}