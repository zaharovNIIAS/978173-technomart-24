var map_link = document.querySelector(".button-map");
var map_popup = document.querySelector(".modal-map");
var map_close = map_popup.querySelector(".modal-close");

var write_us_link = document.querySelector(".button-write-us");
var write_us_popup = document.querySelector(".modal-write-us");
var write_us_close = write_us_popup.querySelector(".modal-close");

var write_us_form = write_us_popup.querySelector("form");
var write_us_name = write_us_popup.querySelector("#modal-write-us-name");
var write_us_email = write_us_popup.querySelector("#modal-write-us-email");
var write_us_text = write_us_popup.querySelector("#modal-write-us-text");

var isStorageSupport = true;
var write_us_name_value = "";
var write_us_email_value = "";

try {
    write_us_name_value = localStorage.getItem("write_us_name");
    write_us_email_value = localStorage.getItem("write_us_email");
} catch (err) {
    isStorageSupport = false;
}

map_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    map_popup.classList.add("modal-show");
});

map_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    map_popup.classList.remove("modal-show");
});

write_us_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    write_us_popup.classList.add("modal-show");
    if (isStorageSupport) {
        if (write_us_name_value && write_us_email_value) {
            write_us_name.value = write_us_name_value;
            write_us_email.value = write_us_email_value;
            write_us_text.focus();
        }
        else {
            if (write_us_name_value) {
                write_us_name.value = write_us_name_value;
                write_us_email.focus();
            }
            else {
                if (write_us_email_value) {
                    write_us_email.value = write_us_email_value;
                    write_us_name.focus();
                }
                else {
                    write_us_name.focus();
                }
            }
        }
    }
    else {
        write_us_name.focus();
    }
});

write_us_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    write_us_popup.classList.remove("modal-show");
    write_us_popup.classList.remove("modal-error");
});

write_us_form.addEventListener("submit", function (evt) {
    if (!write_us_name.value || !write_us_email.value || !write_us_text.value) {
        evt.preventDefault();
        write_us_popup.classList.remove("modal-error");
        write_us_popup.offsetWidth = write_us_popup.offsetWidth;
        write_us_popup.classList.add("modal-error");
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem("write_us_name", write_us_name.value);
            localStorage.setItem("write_us_email", write_us_email.value);
        }
    }
});