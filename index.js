const Immutable = window.Immutable;

// make console.log write to the page for better in-browser experience
(function () {
var body = document.querySelector('body');
body.style['fontFamily'] = 'monospace';
body.style['fontSize'] = '2em';
console.log = function (x) { body.innerText += x + '\n'; };
}());


let cart = Immutable.fromJS({
    'items': [
        {
            'ASIN': 'B0008KLVVO',   
            'title': 'Paid in Full',
            'personnel': [
                {
                    'name': 'Erik B',
                    'role': 'DJ'
                },
                {
                    'name': 'Rakim',
                    'role': 'MC'
                }
            ],
            'price': 4.99
        },
        {
            'ASIN': 'B00HAPTX42',
            'title': 'Hello Nasty',
            'personnel': [
                {
                    'name': 'MCA',
                    'role': 'MC'
                },
                {
                    'name': 'Mike D',
                    'role': 'MC'
                },
                {
                    'name': 'Ad-Rock',
                    'role': 'MC'
                },
                {
                    'name': 'Mix Master Mike',
                    'role': 'DJ'
                }
            ],
            'price': 7.00
        }
    ]
})

const names = cart.get('items').reduce((p, c) => {
    const n = c.get('personnel').reduce((pi, ci) => {
        console.log(ci);
        return pi.concat(ci.get('name'));
    }, Immutable.List());

    return p.concat(n);
}, Immutable.List());

console.log(names.sort());