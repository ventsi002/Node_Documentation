<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import { user } from "../../store/users.js";

    const navigate = useNavigate();
    const location = useLocation();

    import toastr from "toastr";
    import "toastr/build/toastr.min.css";
    let username;
    let password;

    function login(event) {
        event.preventDefault();

        fetch("http://localhost:8080/auth/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }).then((response) => {
            if (response.status === 200) {
                user.set({ username, password });
                const from =
                    ($location.state && $location.state.from) || "/logged-in";
                navigate(from, { replace: true });
            }
        });

        toastr["success"]("Logged in!");

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

            <input
                type="submit"
                value="Log in"
                class="submit"
                id="loginButton"
                on:click={login}
            />
            <a href="/login"><p>Forgot Password?</p></a>
            <a href="/signup"><p>Don't have an account? Sign up</p></a>
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
