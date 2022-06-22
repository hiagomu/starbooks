// import amazonPaapi from 'amazon-paapi'

// const searchBook = (book) => {

//     const commonParameters = {
//         AccessKey: 'AKIAIEHJWA46D5NFRWAQ',
//         SecretKey: 'xEzP+enoXh8X2P7spOWVigAiEfowW3QY+flcs6W8',
//         PartnerTag: '91244519-20', // yourtag-20
//         PartnerType: 'Associates', // Default value is Associates.
//         Marketplace: 'www.amazon.com.br', // Default value is US. Note: Host and Region are predetermined based on the marketplace value. There is no need for you to add Host and Region as soon as you specify the correct Marketplace value. If your region is not US or .com, please make sure you add the correct Marketplace value.
//     };
    
//     const requestParameters = {
//     Keywords: `${book}`,
//     SearchIndex: 'Books',
//     ItemCount: 10,
//     Resources: [
//         'Images.Primary.Medium',
//         'ItemInfo.Title',
//         'Offers.Listings.Price',
//     ],
//     };

//     /** Promise */
//     amazonPaapi
//     .SearchItems(commonParameters, requestParameters)
//     .then((data) => {
//         // do something with the success response.
//         console.log(data);
//     })
//     .catch((error) => {
//         // catch an error.
//         console.log(error);
//     });
// }

// export default searchBook
