function chooseTransport(type) {
    localStorage.setItem("transport", type);

    window.location.href = "budget.html";
}