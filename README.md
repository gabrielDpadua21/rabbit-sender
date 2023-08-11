# Send Rabbit Message

this project was created to facilitate publish messages in rabbitMQ

v 0.1.1
---

<div align="center">
    <img src="./images/rabbit.jpg" width="100%">
</div>


## Exemplo to send a message

```shell
curl --location 'http://localhost:4004/send' \
--header 'Content-Type: application/json' \
--data '{
    "topic": "topic.name",
    "body": {"any_key": "any_value"}
}'
```

#### License

Copyright © 2023, [Gabriel D. Padua](https://github.com/gabrielDpadua21).
Released under the [MIT license](LICENSE).
