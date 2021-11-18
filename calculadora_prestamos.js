function computeLoan(){
    const monto = document.querySelector('#amount').value;
    const tasa_interes = document.querySelector('#interest_rate').value;
    const meses = document.querySelector('#months').value;
    const interest = (monto * (tasa_interes * 0.01)) / meses;
    let pago = ((monto / meses) + interest).toFixed(2); //calculate monthly pago

    //regedit to add a comma after every three digits
    pago = pago.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //\B looks for a word boundary, ? says what to look for, \d looks for 3 digits in a row
    document.querySelector('#payment').innerHTML = `pago Mensual es de: = ${pago}` 
    
}