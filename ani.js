function submitHandler(){
    var to = "yunchenlin818@gmail.com";
    var subject = "feedback";
    var bodyText = document.getElementById('bodyText').value; // 获取 bodyText 的值
    var body = ""+'%0A%0A%0A'
    body += "From:"+'%0A';
    body += "message:"+bodyText.value+'%0A';

    var mailTo = document.getElementById('mailTo');
    mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body;
    mailTo.click();
}
