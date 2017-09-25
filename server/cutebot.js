let CuteBot = function () {
    console.log(this.prettyContent('                     test'));
}

/*=============================================
 * Make content pretty
 * @input: content
 *=============================================*/
CuteBot.prototype.prettyContent = function (content) {
    content = content.trim();
	return content;
}


/*=============================================
 * Export module
 *=============================================*/
module.exports = CuteBot;
