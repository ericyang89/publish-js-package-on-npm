this is test
thanks the course [publish-javascript-packages-on-npm](https://egghead.io/courses/publish-javascript-packages-on-npm);

## 使用watch注意事项
+ This module includes a simple command line interface, which you can install with npm install watch -g.
+ As the command has to be written in quotation marks Windows users may need to use double quotes rather than single quotes

## 使用np 报错
```shell
 Git
   → fatal: no upstream configured for branch 'master'
   √ Check current branch
   √ Check local working tree
   × Check remote history
     → fatal: no upstream configured for branch 'master'
```

use this to resolve it
```shell
git push --set-upstream origin master
```

[ref link](https://stackoverflow.com/questions/23401652/fatal-the-current-branch-master-has-no-upstream-branch)