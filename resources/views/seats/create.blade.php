<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Crea nuovo tavolo</h1>
<form method="post" action="{{ route('seats.store') }}">
    @csrf
    <label for="name">Nome del tavolo:</label>
    <input type="text" id="name" name="name">
    <input type="text" id="numero_tavolo" name="numero_tavolo">

    <button type="submit">Crea tavolo</button>
</form>
</body>
</html>