const card = ({name,role,id,email,officeNumber,github,school}) =>{

    let roleSpecificVariable;
    if (officeNumber){
        roleSpecificVariable = 'Office Number: '+officeNumber;
    }else if (github){
        roleSpecificVariable = 'GitHub: '+github
    }else{
        roleSpecificVariable = 'School: '+school
    }

    return (
`<section class="card">
    <section class="card-head">
        <h2>${name}</h2>
        <h3>${role}</h3>
    </section>
    <section class="card-content">
        
        <section>
            <ul>
                <li>ID: ${id}</li>
                <li>Email: ${email}</li>
                <li>${roleSpecificVariable}</li>
            </ul>
        </section>
    </section>
</section>`
)}

module.exports = card;