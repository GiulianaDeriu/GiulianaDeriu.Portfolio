function sendMail(params) {
    var temParams ={
        from_name:document.getElementById('fromName').value,  
        message:document.getElementById('msg').value,
    };
    emailjs.send('giulianaderiu@gmail.com', 'template_b0up44n', temParams)
    .then(function(res){
        console.log('success', res.status)
    })
}