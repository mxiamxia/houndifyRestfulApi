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
git remote add origin ssh://git@192.168.0.56/co-houndify
git push -u origin master