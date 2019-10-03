const organization_map = {
org1_depts: [{
    name: 'accounting',
    children: [{
            name: 'accounting payable',
            children: []
        },
        {
            name: 'accounting receivable',
            children: []
        },
    ],
},
{
    name: 'finance',
    children: [],
}],
org2_depts: [{
    name: 'accounting',
    children: [{
            name: 'accounting payable',
            children: []
        },
        {
            name: 'accounting receivable',
            children: [{
                name: 'cash',
                children: []
            }, {
                name: 'check',
                children: []
            }],
        },
    ],
},
{
    name: 'finance',
    children: [{
        name: 'investment',
        children: []
    }],
}]
}

function PrintDepts(title, dept) {
var h1 = document.createElement('h1');
h1.innerText = title;

document.getElementById('container').append(h1);
var result = start_printing(organization_map[dept]);
result.forEach(function(ul){
    document.getElementById('container').append(ul)
})
}

function start_printing(data) {
var ul = document.createElement('ul');
return data.map(function(obj){
    var li = document.createElement('li');
    li.innerText = obj.name;
    ul.append(li);
    if (obj.children && obj.children.length > 0) {
        var result = start_printing(obj.children);
        result.forEach(function(info){
            ul.append(info)
        })
    }
    return ul
})
}

(function(){
PrintDepts('Organization 1', 'org1_depts');
PrintDepts('Organization 2', 'org2_depts')
})()
