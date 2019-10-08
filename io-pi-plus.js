
module.exports = function(RED) {
	function MCP23017WriteNode(config) {
		RED.nodes.createNode(this, config);
		var node = this;
		node.on('input', function(msg) {
			msg.payload = msg.payload;
			node.send(msg);
		});
	}
	RED.nodes.registerType('mcp23017-write-node', MCP23017WriteNode);
}