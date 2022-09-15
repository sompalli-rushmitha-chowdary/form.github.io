let userForm=document.getElementById("user-form");
const retrieveEntries=()=>{
    let entries=localStorage.getItem("user-entries");
    if (entries) {
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
}
let userEntries=retrieveEntries();
const displayEntries=()=>{
    const entries=retrieveEntries();
    const tableEntries=entries.map((entry)=>{
        const namecell='<td class="border px-6 py-4">'+entry.name+'</td>';
        const emailcell='<td class="border px-6 py-4">'+entry.email+'</td>';
        const passwordcell='<td class="border px-6 py-4">'+entry.password+'</td>';
        const dobcell='<td class="border px-6 py-4">'+entry.dob+'</td>';
        const acceptTermscell='<td class="border px-6 py-4">'+entry.acceptedTermsAndconditions+'</td>';
        const row='<tr>'+namecell +emailcell+passwordcell+dobcell+acceptTermscell+'</tr>';
        return row;


    }).join("\n");
    let table = '<table border="1" >\n<tbody>\n<tr>\n<th class="px-6 py-4">  Name  </th class="px-6 py-4">\n<th class="px-6 py-4">  Email  </th>\n<th class="px-6 py-4">  Password  </th>\n<th class="px-6 py-4">  Dob  </th>\n<th class="px-6 py-4">  Accepted terms?  </th>\n</tr>\n';
    console.log(tableEntries.length)
    for(var i=0;i<tableEntries.length;i=i+1)
    {
        table+=tableEntries[i];
    }
    table+='</tbody>\n</table>';
let details=document.getElementById("user-entries");
details.innerHTML = table;
}
const saveUserForm= (event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const acceptedTermsAndconditions=document.getElementById("acceptTerms").checked;
    const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndconditions
    };
    userEntries.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(userEntries));
    displayEntries();
}
userForm.addEventListener("submit",saveUserForm);
displayEntries();
