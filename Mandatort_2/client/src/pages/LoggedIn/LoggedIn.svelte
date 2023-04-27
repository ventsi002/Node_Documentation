<script>
    let greeting;

    fetch("http://localhost:8080/", {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-type": "application/json",
        },
    })
        .then((response) => response.text())
        .then((result) => {
            greeting = result;
        });
</script>

<div>
    <h1>{greeting}</h1>
    <p>Tell me how you feel today.</p>
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 95vh;
    }
</style>
