function getShippingCost(country) {
    switch (country) {
        case 'China':
            const priceChina = 100;
            return `Shipping to ${country} will cost ${priceChina} credits`;
            break
        case 'Chile':
            const priceChile = 250;
            return `Shipping to ${country} will cost ${priceChile} credits`;
            break
        case 'Australia':
            const priceAustralia = 250;
            return `Shipping to ${country} will cost ${priceAustralia} credits`;
            break
        case 'Jamaica':
            const priceJamaica = 120;
            return `Shipping to ${country} will cost ${priceJamaica} credits`;
            break
        default:
            return "Sorry, there is no delivery to your country";
    }
}
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
