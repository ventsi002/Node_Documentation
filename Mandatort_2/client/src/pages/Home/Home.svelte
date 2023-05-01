<script>
    import { Router, Route, Link } from "svelte-navigator";
</script>

<div class="info">
    <h1>Hello</h1>
    <h3>This is a simple home page for my mandatory 2 project.</h3>
    <h3>
        <Router>
            <Link to="contact">Tell me how cool I am.</Link>
        </Router>
    </h3>
</div>

<style>
    .info {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 95vh;
    }
</style>
