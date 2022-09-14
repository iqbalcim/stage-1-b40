function submitData(){

    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value


    // if( name == "" || email == "" || phone == ""){
    //    return alert("semua filed wajib diisi")
    // }

    if(name == ""){
        return alert("name harus diisi")
    } else if(email == ""){
        return alert("email harus diisi")
    } else if(phone == ""){
        return alert("phone harus diisi")
    } else if(subject == ""){
        return alert("subject harus diisi")
    } else if(message == ""){
        return alert("message harus diisi")
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    // <a href="mailto:hallo@dw.com?subject=hallo samsul&body=isi pesan">Send email</a>

    let emailReceiver = "hallo@dw.com"

    let a = document.createElement('a') ;
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak ke nomor ${phone}` ;
    a.click();

    // https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}

    let student = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(student);
}