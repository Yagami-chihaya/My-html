var fs = require('fs')


var ws = fs.WriteStream('hello5.txt')
ws.write('123')
ws.write('123')
ws.write('123')
ws.write('123')
ws.write('123')
ws.write('123')


ws.close()   //此处不用close是因为close会全程阻断文件的写入，导致流失写入无效(现版本可以了)