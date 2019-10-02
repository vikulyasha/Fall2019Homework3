const org1_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        { name: 'accounting receivable', children: [] },
      ],
    },
    {
      name: 'finance',
      children: [],
    },
  ]
  
  const org2_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        {
          name: 'accounting receivable',
          children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
        },
      ],
    },
    {
      name: 'finance',
      children: [{ name: 'investment', children: [] }],
    },
  ]

  const start_tag = '<ul>'
  const end_tag = '</ul>'
  const start_li = '<li>'
  const end_li = '</li>'

  
  /*
  var output1 = start_tag
  for (const user of org1_depts) {
    output1 += start_li + user.name + end_li
  }
  output1 += end_tag
  
  const outputDiv = document.getElementById('firstOrg')
  outputDiv.innerHTML = output1
*/
  

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



  function printDepts (depts) {
    var output = start_tag
    for (const user of depts) {
      output += start_li + user.name + end_li
      if (user.children == true) {
          output1 = start_tag
          for (const i of user.children) {
            output1 += start_li + i.children + end_li
          }
          output1 += end_tag
      } 
      }
    
    output += end_tag
    return output
  }








  /*
  function showDepartments(i) {
      document.getElementById("firstOrg").innerHTML = org1_depts;
  }

  showDepartments(org1_depts);
  */