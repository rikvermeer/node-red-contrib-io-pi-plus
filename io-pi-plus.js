const mcp23017 = require('mcp23017');

module.exports = function(RED) {
	function MCP23017WriteNode(config) {
		RED.nodes.createNode(this, config);
		
		this.bus = config.bus;
		this.address = config.address;
		this.direction = config.direction;
		this.init = config.init;
		
		this.IOPi = new mcp23017.IOPi();

		var node = this;
		node.on('input', function(msg) {
			msg.payload = msg.payload;
			node.send(msg);
		});
	}
	RED.nodes.registerType('mcp23017-write-node', MCP23017WriteNode);
}