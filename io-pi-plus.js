const mcp23017 = require('mcp23017');


module.exports = function(RED) {


	function MCP23017ConfigNode(config) {
        RED.nodes.createNode(this, config);

        this.bus = config.bus;
        this.address = config.address;

        this.mcp23017 = new mcp23017.IOPi(bus, address);
    }
    RED.nodes.registerType("mcp23017-config", MCP23017ConfigNode);


    function MCP23017PortConfigNode(config) {
        RED.nodes.createNode(this, config);

        this.configNode = RED.nodes.getNode(config.mcp23017Config);
        this.mcp23017 = this.configNode.mcp23017;

        this.bus = this.configNode.bus;
        this.address = this.configNode.address;
        this.direction = config.direction;
		this.init = config.init;

		//Hardcoded, replace with vars		
		this.mcp23017.setPortDirection(0, 0);
		this.mcp23017.setPortDirection(1, 0);
		this.mcp23017.writePort(0, 0xFF);
		this.mcp23017.writePort(1, 0xFF);
    }
    RED.nodes.registerType("mcp23017-port-config", MCP23017PortConfigNode);


	function MCP23017WriteNode(config) {
		RED.nodes.createNode(this, config);
		
		this.portConfigNode = RED.nodes.getNode(config.mcp23017PortConfig);
		this.mcp23017 = this.portConfigNode.mcp23017;

		this.bus = this.portConfigNode.bus;
		this.address = this.portConfigNode.address;
		this.direction = this.portConfigNode.direction;
		this.init = this.portConfigNode.init;

		var node = this;
		node.on('input', function(msg) {
			msg.payload = msg.payload;
			node.send(msg);
		});
	}
	RED.nodes.registerType('mcp23017-write-node', MCP23017WriteNode);

	function MCP23017WritePin(config) {
		RED.nodes.createNode(this, config);
		
		this.portConfigNode = RED.nodes.getNode(config.mcp23017PortConfig);
		this.mcp23017 = this.portConfigNode.mcp23017;

		this.bus = this.portConfigNode.bus;
		this.address = this.portConfigNode.address;
		this.direction = this.portConfigNode.direction;
		this.init = this.portConfigNode.init;

		var node = this;
		node.on('input', function(msg) {
			msg.payload = msg.payload;
			node.send(msg);
		});
	}
	RED.nodes.registerType('mcp23017-write-pin', MCP23017WritePin);

	function MCP23017WritePort(config) {
		RED.nodes.createNode(this, config);
		
		this.portConfigNode = RED.nodes.getNode(config.mcp23017PortConfig);
		this.mcp23017 = this.portConfigNode.mcp23017;

		this.bus = this.portConfigNode.bus;
		this.address = this.portConfigNode.address;
		this.direction = this.portConfigNode.direction;
		this.init = this.portConfigNode.init;

		var node = this;
		node.on('input', function(msg) {
			msg.payload = msg.payload;
			node.send(msg);
		});
	}
	RED.nodes.registerType('mcp23017-write-port', MCP23017WritePort);
}