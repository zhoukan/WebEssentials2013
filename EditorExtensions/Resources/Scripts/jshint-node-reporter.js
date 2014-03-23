/* jshint node: true */
"use strict";

module.exports = {
    reporter: function (res) {
        var messageItems = res.map(function (result) {
            var error = result.error;

            if (error.reason === "缺少基数参数。")
                error.reason = "当使用 parseInt 函数时，请记住要指定基数参数。 例如: parseInt('3', 10)";

            return {
                Line: parseInt(error.line, 10)
              , Column: parseInt(error.character, 10)
              , Message: "JsHint (" + error.code + "): " + error.reason
              , FileName: result.file
            };
        });

        process.stdout.write(JSON.stringify(messageItems));
    }
};