# Joining Non-Eagler servers


To join non eagler servers on the client, just do not include `wss://` in the server address. If you include `wss://`, the client will assume its an eagler server.


## If a server has Java and Eagler Support

If the server has both Java and Eagler support, you should definitely use Eagler. Here's why:

1. Eagler is much faster than Java
2. Eagler is supported natively, with needing to use a relay, resulting in better ping.
