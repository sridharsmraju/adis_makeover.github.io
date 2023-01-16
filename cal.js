
var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
$('#startDate').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    minDate: today,
    maxDate: function () {
        return $('#endDate').val();
    }
});
$('#endDate').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    minDate: function () {
        return $('#startDate').val();
    }
});


//         if ($_POST['action'] == 'Update') {
//     console.log('ABC');
// } else if ($_POST['action'] == 'Delete') {
//     console.log('aaaaABC');
// } else {
//     console.log('ABCa');
// }

function f() {

    console.log('I am inside function');
    let a = document.getElementById('startDate').value;
    let b = document.getElementById('endDate').value;
    const dateOne = new Date(a); // 20th April 2021
    const dateTwo = new Date(b); // 10th April 2021
    no_of_days = dateTwo.getDate() - dateOne.getDate() + 1;
    let com = document.getElementById('date_module_s');
    let new_element = document.createElement('form');
console.log(com);
console.log('sridhar');
    new_element.name = 'dynamic_form';
    new_element.className = 'form_internal d-block';
    new_element.id = 'from_natural_101';
    console.log(com + new_element);
    com.append(new_element);





    for (let i = 0; i < no_of_days; i++) {
        console.log('inside for****************************');
        let new_element = document.createElement('div');
        let com = document.getElementById('from_natural_101');
        //let innerHTML = document.getElementById('from_natural_101').nextElementSibling.innerHTML;

        let innerHTML = document.getElementById('order_cnt').innerHTML;
        console.log(innerHTML);
        new_element.className = 'new_element d-inline-flex dynamic_content form-outline mb-4 new_element' + i;
        new_element.innerHTML = document.getElementById('order_cnt').innerHTML;
        console.log(innerHTML);
        //new_element.setAttribute(style="border=2px solid grey;")
        com.append(new_element);
        j=i+1;
        document.getElementsByClassName('new_element' + i)[0].getElementsByTagName('button')[0].innerText='Day'+j;

    }


    // Dynamically added button onclick not working J query needed
    //  let comm = document.getElementById('from_natural_101');
    //  let new_elementm = document.createElement('button');

    //   new_elementm.name='dynamic_button';
    //   new_elementm.className='btn_internals btn btn-warning btn-block btn-sm';
    //   new_elementm.id='btn_natural_101';

    //  new_elementm.innerText='Estimate';

    //   comm.append(new_elementm);



    // let new_new_btn=document.getElementById('btn_natural_101');
    // new_new_btn.setAttribute("type","submit");

    // new_new_btn.onsubmit=estimate();



    return false;
}


function validate_all_fields() {
    console.log('hurray');

    let name = document.getElementById('form6Example3').value;
    let ph = document.getElementById('form6Example6').value;
    let dig = /[0-9]/;
    console.log(name);
    re = /^[a-zA-Z]+$/;
      res=/^\s+$/;
    //

    if (name.length == 0 || res.test(name))
    {
        alert('Name cannot be empty');
        return false;
    }
    //
    if (re.test(name)) {
        console.log('hurray23'); console.log('hurray');
    }
    else {
        alert('Only Aphabets allowed in Name field');
        return false;
    }

    console.log(ph.length);
    if (ph.length != 10) {
        alert('Ph should be of 10 digits');
        return false;
    }
    return true;

}

