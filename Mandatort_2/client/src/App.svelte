<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Login from "./pages/Login/Login.svelte";
  import Home from "./pages/Home/Home.svelte";
  import Signup from "./pages/Signup/Signup.svelte";
  import LoggedIn from "./pages/LoggedIn/LoggedIn.svelte";
  import PrivateRoute from "./components/PrivateRoute.svelte";
  import Contact from "./pages/Contact/Contact.svelte";
  import { user } from "./store/users.js";

  function logout() {
    $user = null;
    fetch("http://localhost:8080/auth/logout", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      if (response.status === 200) {
        window.location.href = "/";
      }
    });
  }
</script>

<Router>
  <nav>
    <Route path="/">
      <Link to="login">Login</Link>
      <Link to="signup">Signup</Link>
      <Home />
    </Route>

    <Route path="/login">
      <Link to="/">Home</Link>
      <Login />
    </Route>

    <Route path="/signup">
      <Link to="/">Home</Link>
      <Signup />
    </Route>

    <Route path="/contact">
      <Contact />
    </Route>

    <PrivateRoute path="/logged-in" let:location>
      <Link to="/" on:click={logout}>Logout</Link>
      <LoggedIn />
    </PrivateRoute>
  </nav>
</Router>
