const card = (employee) =>{

    // Creates a string with appropriate wording for the location
    let roleSpecificVariable;
    if (employee.getRole() === 'Manager'){
        roleSpecificVariable = 'Office Number: '+employee.getOfficeNumber();
    }else if (employee.getRole()==='Engineer'){
        roleSpecificVariable = 'GitHub: '+employee.getGithub()
    }else{
        roleSpecificVariable = 'School: '+employee.getSchool()
    }

    // Creates a card will information of the staff, which is then added into the htmlPage.js file for each staff member
    return (
                `<section class="card">
                    <section class="card-head">
                        <h2>${employee.getName()}</h2>
                        <h3>${employee.getRole()}</h3>
                    </section>
                    <section class="card-content">
                        
                        <section>
                            <ul>
                                <li>ID: ${employee.getId()}</li>
                                <li>Email: ${employee.getEmail()}</li>
                                <li>${roleSpecificVariable}</li>
                            </ul>
                        </section>
                    </section>
                </section>`
)}

module.exports = card;