(
    ()=> {
        const user = localStorage.getItem("user");

        if (!user) {
            window.location.href = "login(1).html"
        }
    }
)()