let data = [
    {
        name: 'Boone',
        age: '23'
    },
    {
        name: 'James',
        age: '35'
    },
    {
        name: 'Ethan',
        age: '40'
    },
    {
        name: 'Ben',
        age: '46'
    },
    {
        name: 'Locke',
        age: '50'
    },
    {
        name: 'Jack',
        age: '36'
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item){
    return  '<div>' + item.name +  ' ' +  'is' + ' ' +  item.age +  ' years old'+ '</div>';
});

info.innerHTML = details.join('\n');
