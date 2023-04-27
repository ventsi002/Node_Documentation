<script>
    import toastr from "toastr";
    import "toastr/build/toastr.min.css";

    let username;
    let password;
    let email;

    function signup(event) {
        event.preventDefault();

        fetch("http://localhost:8080/auth/signup", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
            }),
        }).then((response) => {
            if (response.status === 200) {
                window.location.href = "/login";
            }
        });

        toastr["success"](" ", "Register successful");

        toastr.options = {
            closeButton: false,
            debug: false,
            newestOnTop: false,
            progressBar: false,
            positionClass: "toast-top-right",
            preventDuplicates: false,
            onclick: null,
            showDuration: "300",
            hideDuration: "800",
            timeOut: "3000",
            extendedTimeOut: "1500",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
        };
    }
</script>

<body>
    <main>
        <form>
            <div class="input-div">
                <input
                    type="text"
                    class="username"
                    placeholder="Username"
                    id="username"
                    bind:value={username}
                />
            </div>
            <div class="input-div">
                <input
                    type="password"
                    class="password"
                    placeholder="Password"
                    id="password"
                    bind:value={password}
                />
            </div>
            <div class="input-div">
                <input
                    type="text"
                    class="email"
                    placeholder="Email"
                    id="email"
                    bind:value={email}
                />
            </div>

            <input
                type="submit"
                value="Sign up"
                class="submit"
                id="loginButton"
                on:click={signup}
            />
            <a href="/login"><p>Already have an account? log in</p></a>
        </form>
    </main>
</body>

<style>
    body {
        background-color: aquamarine;
        min-height: 93vh;
        min-width: 95vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    main {
        background: white;
        min-width: 320px;
        min-height: 40vh;
        padding: 2rem;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    .input-div {
        position: relative;
    }

    form .input-div:first-child {
        padding-top: 1rem;
        margin-bottom: 2rem;
    }

    form .input-div:nth-child(2) {
        margin-bottom: 2rem;
    }

    .input-div input {
        outline: none;
        font-size: 0.9rem;
        color: rgba(0, 0, 0, 0.7);
        width: 100%;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    .input-div input::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }

    .submit {
        margin-top: 4rem;
        padding: 0.6rem;
        width: 100%;
        background: linear-gradient(to left, #1feed9, #26bbc0);
        cursor: pointer;
        color: white;
        font-size: 0.9rem;
        border-radius: 4px;
        border: none;
    }

    p {
        text-align: center;
    }
</style>
