
let products = [
    {
        price: '$800',
        name: 'TV',
        info: '4K Ultra HD'
    },

    {
        price: '$300',
        name: 'Game Console',
        info: 'The latest and greatest'
    },

    {
        price: '$1200',
        name: 'Laptop',
        info: '16GB RAM 1TB SSD'
    },

    {
        price: '$100',
        name: 'Headphones',
        info: 'Clearest music to be heard'
    },

    {
        price: '$100',
        name: 'Keyboard',
        info: 'Types for you'
    },

    {
        price: '$100',
        name: 'HDMI Cord',
        info: 'HDMI to USB type C'
    },

    {
        price: '$300',
        name: 'Monitor',
        info: '4K Ultra HD'
    },

    {
        price: '$200',
        name: 'Speaker',
        info: 'Clearest music to be heard'
    },

    {
        price: '$60',
        name: 'Video Game',
        info: 'Enjoy for hours'
    },
];


products.forEach(function(item){
    $(`#appendToMe`).append(`<div class = "products"><p class = information>${item.price}</p> <p class = information>${item.name}</p> <p class = information>${item.info}</p></div>`)
});


$(`#darkMode`).click(function(){
    $(`#contentContainer`).toggleClass(`darkModeActivate`);
});

$(`#darkMode`).click(function(){
    $(`.products`).toggleClass(`darkModeActivate2`);
});

$(`#darkMode`).click(function(){
    $(`#darkMode`).toggleClass(`darkModeActivate3`);
});

$(`#darkMode`).click(function(){
    $(`#header`).toggleClass(`darkModeActivate3`);
});