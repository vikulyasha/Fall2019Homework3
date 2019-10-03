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





  /*const start_tag = '<ul>'
  const end_tag = '</ul>'
  const start_li = '<li>'
  const end_li = '</li>'

  
  function printDepts (depts) {
    var output = start_tag
    for (const user of depts) {
      output += start_li + user.name + end_li
      while (depts.children) {
          depts = depts.children
        }
      }
    }
    output += end_tag
    return output
  }


  const outputDiv1 = document.getElementById('firstOrg')
  outputDiv1.innerHTML = printDepts (org1_depts)
  
  const outputDiv2 = document.getElementById('secondOrg')
  outputDiv2.innerHTML = printDepts (org2_depts)



 /*
  const start_tag = '<ul>'
  const end_tag = '</ul>'
  const start_li = '<li>'
  const end_li = '</li>'



  function printOut (depts) {
    var output = start_tag
    for (const user of depts) {
      output += start_li + user.name + end_li
    }
    output += end_tag
    return output
  }

  const outputDiv1 = document.getElementById('firstOrg')
  outputDiv1.innerHTML = printDepts (org1_depts)
  
  const outputDiv2 = document.getElementById('secondOrg')
  outputDiv2.innerHTML = printDepts (org2_depts)

*/


