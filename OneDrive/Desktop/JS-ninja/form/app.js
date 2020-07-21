const inputs = document.querySelectorAll('input');



const patterns = {
    username: /^[a-z\d]{5,12}$/i, // /^[a-zA-Z0-9]{5,12}$/;
    telephone: /^\d{11}$/,   //  /^[0-9]{11}$/;
    password: /^[\w@-]{8,20}$/,  //[a-zA-Z0-9 _]
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
          //muchirijane   @   gmail.   com.uk
}

function validate(field, regex){
   //console.log( regex.test(field.value));
   if(regex.test(field.value)){
       field.setAttribute('class', 'success')
   }else{
       field.setAttribute('class', 'error');

   }
}

inputs.forEach(input =>{
    input.addEventListener('keyup', e =>{
        //console.log(e.target.attributes.name.value); 
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
})

