function sendMessage(name, email, text, modal, formBtn, close) {
    formBtn.disabled = true;
    let targetDiv = document.getElementById("contact-form-send").getElementsByClassName("response")[0];
    if (name === '' || email === '') {
        targetDiv.innerHTML = "<div class=\"failed\">Please fill the required fields.</div>";
        formBtn.disabled = false;
        return false;
    } else {
        targetDiv.innerHTML = "";
        let url = "https://api.telegram.org/" +
            "bot5289934625:AAFS-aCwlhpxChv7wy2gZIAp4MgQ5abspdo" +
            "/sendMessage?chat_id=@sysdevsinfo&text=";

        let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        let language = Intl.DateTimeFormat().resolvedOptions().locale;

        let message = '' +
            '👔️ ' + name + '%0A' +
            '📧 ' + email + '%0A' +
            '🗺 ' + timezone + '%0A' +
            '🎓 ' + language + '%0A' +
            '✍️ ' + text
        url += message;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    toggleModal(modal, formBtn, close, 'Спасибо! Ваше сообщение успешно отправлено!');
                    clearMessage();
                    formBtn.disabled = false;
                } else {
                    toggleModal(modal, formBtn, close, `<div style="color:#dd4142 ">Ошибка! Ваше сообщение не отправлено!</div>`);
                    formBtn.disabled = false;
                }
            }
        };

        xhr.send();
    }
}

function toggleModal(modal, formBtn, close, content) {
    document.getElementById('modal-content').innerHTML = content;
    modal.style.display = "block";

    close.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function clearMessage() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('text').value = '';
}
