function translateText(element, key, language) {
    $.getJSON('js/sst/' + language + '/index.json', function (data) {
        element.innerText = data[key]
    });

}


function sst(language) {
    let allElements = document.getElementsByTagName('span')
    let allDivs = document.getElementsByTagName('div')
    for (let i = 0; i < allElements.length; i++) {
        let curr_element = allElements[i]
        if (curr_element.hasAttribute('sst')) {
            translateText(curr_element, curr_element.getAttribute('sst'), language);
        }
    }
    for (let i = 0; i < allDivs.length; i++) {
        let curr_element = allDivs[i]
        if (curr_element.hasAttribute('sst')) {
            translateText(curr_element, curr_element.getAttribute('sst'), language);
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    let dropdownMenuLink = document.getElementById("dropdownMenuLink")
    let language = localStorage.getItem('language')
    if (language) {
        setLanguage(language)
    }
    else setLanguage('en')
    sst(language ? language : 'en');
    let uz = document.getElementById("uz")
    uz.onclick = function () {
        localStorage.setItem('language', 'uz')
        sst('uz')
        dropdownMenuLink.innerHTML = "<img src=\"https://flagicons.lipis.dev/flags/4x3/uz.svg\" alt='uz'/>";
    }
    let ru = document.getElementById("ru")
    ru.onclick = function () {
        localStorage.setItem('language', 'ru')
        sst('ru')
        dropdownMenuLink.innerHTML = "<img src=\"https://flagicons.lipis.dev/flags/4x3/ru.svg\" alt='ru'/>"
    }
    let en = document.getElementById("en")
    en.onclick = function () {
        localStorage.setItem('language', 'en')
        sst('en')
        dropdownMenuLink.innerHTML = "<img src=\"https://flagicons.lipis.dev/flags/4x3/us.svg\" alt='en' />"
    }





    function setLanguage(language) {
        switch (language) {
            case 'uz' :
                dropdownMenuLink.innerHTML = "<img src=\"https://flagicons.lipis.dev/flags/4x3/uz.svg\" alt='uz'/>";
                break
            case 'ru' :
                dropdownMenuLink.innerHTML = "<img src=\"https://flagicons.lipis.dev/flags/4x3/ru.svg\" alt='ru'/>";
                break
            case 'en' :
                dropdownMenuLink.innerHTML = "<img src=\"https://flagicons.lipis.dev/flags/4x3/us.svg\" alt='en' />";
                break
        }
    }
});
