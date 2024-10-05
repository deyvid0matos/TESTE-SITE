<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $contato = htmlspecialchars($_POST['contato']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    // Configurações de envio
    $para = "seu-email@dominio.com";  // Substitua pelo seu endereço de email
    $assunto = "Contato de: $nome";
    $corpo = "Nome: $nome\nEmail: $email\nContato: $contato\n\nMensagem:\n$mensagem";
    $headers = "From: $email";

    // Enviar o email e redirecionar com base no resultado
    if (mail($para, $assunto, $corpo, $headers)) {
        header("Location: index.php?status=sucesso");
    } else {
        header("Location: index.php?status=erro");
    }
    exit();
}
?>
