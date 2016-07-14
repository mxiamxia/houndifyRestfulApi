#### Description

Houndify chat conversation service only provides client SDK to support each type of device or language, Houdify restful service will provide the service to all clients. We can take it as Node JS Houndify SDK runnign on server side.

---
#### Preparation

* Sign up a free houndify dev account [Sign Up](https://www.houndify.com/signup?ref=menubar)
* Create a Houndify Client
* Get ClientId and ClientKey




#### Install
If your package.json file contains "start": "node ./bin/www"
Use the following command to bring up your app with forever

```bash
forever start --minUptime 1000 --spinSleepTime 1000 ./bin/www
```

Check list of forever process using the command

```bash
forever list
```

Stop the forever process using the command. We can find the pid from forever list command

```bash
forever stop <pid>
```



git init
git add *
git commit -m "initial commit"
git remote add origin ssh://gitadmin@192.168.254.196/co-houndify
or 
git remote set-url origin ssh://gitadmin@192.168.254.196/co-houndify
git push -u origin master

istanbul cover _mocha --recursive test/*
