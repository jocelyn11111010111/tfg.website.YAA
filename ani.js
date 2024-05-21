function submitHandler(){
    var to = "yunchenlin818@gmail.com";
    var subject = "feedback";
    var body = ""+'%0A%0A%0A'
        body += "From:"+'%0A';
        body += "message:"+bodyText.value+'%0A';

    mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body;
    mailTo.click();
}
