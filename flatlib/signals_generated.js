// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var events = events || {};

/**
 * @enum {number}
 */
events.Data = {
  NONE: 0,
  Connected: 1,
  Err: 2,
  Lobbyinfo: 3,
  SessionEnd: 4,
  Gamedata: 5
};

/**
 * @enum {string}
 */
events.DataName = {
  '0': 'NONE',
  '1': 'Connected',
  '2': 'Err',
  '3': 'Lobbyinfo',
  '4': 'SessionEnd',
  '5': 'Gamedata'
};

/**
 * @constructor
 */
events.Cmd = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {events.Cmd}
 */
events.Cmd.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.Cmd=} obj
 * @returns {events.Cmd}
 */
events.Cmd.getRootAsCmd = function(bb, obj) {
  return (obj || new events.Cmd).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.Cmd=} obj
 * @returns {events.Cmd}
 */
events.Cmd.getSizePrefixedRootAsCmd = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new events.Cmd).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
events.Cmd.prototype.command = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
events.Cmd.prototype.code = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
events.Cmd.startCmd = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} commandOffset
 */
events.Cmd.addCommand = function(builder, commandOffset) {
  builder.addFieldOffset(0, commandOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} code
 */
events.Cmd.addCode = function(builder, code) {
  builder.addFieldInt32(1, code, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
events.Cmd.endCmd = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} commandOffset
 * @param {number} code
 * @returns {flatbuffers.Offset}
 */
events.Cmd.createCmd = function(builder, commandOffset, code) {
  events.Cmd.startCmd(builder);
  events.Cmd.addCommand(builder, commandOffset);
  events.Cmd.addCode(builder, code);
  return events.Cmd.endCmd(builder);
}

/**
 * @constructor
 */
events.Err = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {events.Err}
 */
events.Err.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.Err=} obj
 * @returns {events.Err}
 */
events.Err.getRootAsErr = function(bb, obj) {
  return (obj || new events.Err).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.Err=} obj
 * @returns {events.Err}
 */
events.Err.getSizePrefixedRootAsErr = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new events.Err).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
events.Err.prototype.message = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
events.Err.prototype.errCode = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
events.Err.startErr = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} messageOffset
 */
events.Err.addMessage = function(builder, messageOffset) {
  builder.addFieldOffset(0, messageOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} errCode
 */
events.Err.addErrCode = function(builder, errCode) {
  builder.addFieldInt32(1, errCode, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
events.Err.endErr = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} messageOffset
 * @param {number} errCode
 * @returns {flatbuffers.Offset}
 */
events.Err.createErr = function(builder, messageOffset, errCode) {
  events.Err.startErr(builder);
  events.Err.addMessage(builder, messageOffset);
  events.Err.addErrCode(builder, errCode);
  return events.Err.endErr(builder);
}

/**
 * @constructor
 */
events.Connected = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {events.Connected}
 */
events.Connected.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.Connected=} obj
 * @returns {events.Connected}
 */
events.Connected.getRootAsConnected = function(bb, obj) {
  return (obj || new events.Connected).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.Connected=} obj
 * @returns {events.Connected}
 */
events.Connected.getSizePrefixedRootAsConnected = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new events.Connected).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
events.Connected.prototype.message = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
events.Connected.startConnected = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} messageOffset
 */
events.Connected.addMessage = function(builder, messageOffset) {
  builder.addFieldOffset(0, messageOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
events.Connected.endConnected = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} messageOffset
 * @returns {flatbuffers.Offset}
 */
events.Connected.createConnected = function(builder, messageOffset) {
  events.Connected.startConnected(builder);
  events.Connected.addMessage(builder, messageOffset);
  return events.Connected.endConnected(builder);
}

/**
 * @constructor
 */
events.User = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {events.User}
 */
events.User.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.User=} obj
 * @returns {events.User}
 */
events.User.getRootAsUser = function(bb, obj) {
  return (obj || new events.User).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.User=} obj
 * @returns {events.User}
 */
events.User.getSizePrefixedRootAsUser = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new events.User).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
events.User.prototype.username = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
events.User.prototype.id = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
events.User.startUser = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} usernameOffset
 */
events.User.addUsername = function(builder, usernameOffset) {
  builder.addFieldOffset(0, usernameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} idOffset
 */
events.User.addId = function(builder, idOffset) {
  builder.addFieldOffset(1, idOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
events.User.endUser = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} usernameOffset
 * @param {flatbuffers.Offset} idOffset
 * @returns {flatbuffers.Offset}
 */
events.User.createUser = function(builder, usernameOffset, idOffset) {
  events.User.startUser(builder);
  events.User.addUsername(builder, usernameOffset);
  events.User.addId(builder, idOffset);
  return events.User.endUser(builder);
}

/**
 * @constructor
 */
events.Lobbyinfo = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {events.Lobbyinfo}
 */
events.Lobbyinfo.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.Lobbyinfo=} obj
 * @returns {events.Lobbyinfo}
 */
events.Lobbyinfo.getRootAsLobbyinfo = function(bb, obj) {
  return (obj || new events.Lobbyinfo).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.Lobbyinfo=} obj
 * @returns {events.Lobbyinfo}
 */
events.Lobbyinfo.getSizePrefixedRootAsLobbyinfo = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new events.Lobbyinfo).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {number} index
 * @param {events.User=} obj
 * @returns {events.User}
 */
events.Lobbyinfo.prototype.players = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new events.User).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
events.Lobbyinfo.prototype.playersLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
events.Lobbyinfo.prototype.maxplayers = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
events.Lobbyinfo.prototype.id = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
events.Lobbyinfo.prototype.status = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
events.Lobbyinfo.startLobbyinfo = function(builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} playersOffset
 */
events.Lobbyinfo.addPlayers = function(builder, playersOffset) {
  builder.addFieldOffset(0, playersOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
events.Lobbyinfo.createPlayersVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
events.Lobbyinfo.startPlayersVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} maxplayers
 */
events.Lobbyinfo.addMaxplayers = function(builder, maxplayers) {
  builder.addFieldInt32(1, maxplayers, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} idOffset
 */
events.Lobbyinfo.addId = function(builder, idOffset) {
  builder.addFieldOffset(2, idOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} status
 */
events.Lobbyinfo.addStatus = function(builder, status) {
  builder.addFieldInt32(3, status, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
events.Lobbyinfo.endLobbyinfo = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} playersOffset
 * @param {number} maxplayers
 * @param {flatbuffers.Offset} idOffset
 * @param {number} status
 * @returns {flatbuffers.Offset}
 */
events.Lobbyinfo.createLobbyinfo = function(builder, playersOffset, maxplayers, idOffset, status) {
  events.Lobbyinfo.startLobbyinfo(builder);
  events.Lobbyinfo.addPlayers(builder, playersOffset);
  events.Lobbyinfo.addMaxplayers(builder, maxplayers);
  events.Lobbyinfo.addId(builder, idOffset);
  events.Lobbyinfo.addStatus(builder, status);
  return events.Lobbyinfo.endLobbyinfo(builder);
}

/**
 * @constructor
 */
events.Gamedata = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {events.Gamedata}
 */
events.Gamedata.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.Gamedata=} obj
 * @returns {events.Gamedata}
 */
events.Gamedata.getRootAsGamedata = function(bb, obj) {
  return (obj || new events.Gamedata).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.Gamedata=} obj
 * @returns {events.Gamedata}
 */
events.Gamedata.getSizePrefixedRootAsGamedata = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new events.Gamedata).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
events.Gamedata.prototype.url = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
events.Gamedata.startGamedata = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} urlOffset
 */
events.Gamedata.addUrl = function(builder, urlOffset) {
  builder.addFieldOffset(0, urlOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
events.Gamedata.endGamedata = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} urlOffset
 * @returns {flatbuffers.Offset}
 */
events.Gamedata.createGamedata = function(builder, urlOffset) {
  events.Gamedata.startGamedata(builder);
  events.Gamedata.addUrl(builder, urlOffset);
  return events.Gamedata.endGamedata(builder);
}

/**
 * @constructor
 */
events.SessionEnd = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {events.SessionEnd}
 */
events.SessionEnd.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.SessionEnd=} obj
 * @returns {events.SessionEnd}
 */
events.SessionEnd.getRootAsSessionEnd = function(bb, obj) {
  return (obj || new events.SessionEnd).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.SessionEnd=} obj
 * @returns {events.SessionEnd}
 */
events.SessionEnd.getSizePrefixedRootAsSessionEnd = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new events.SessionEnd).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
events.SessionEnd.prototype.userId = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
events.SessionEnd.startSessionEnd = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} userIdOffset
 */
events.SessionEnd.addUserId = function(builder, userIdOffset) {
  builder.addFieldOffset(0, userIdOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
events.SessionEnd.endSessionEnd = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} userIdOffset
 * @returns {flatbuffers.Offset}
 */
events.SessionEnd.createSessionEnd = function(builder, userIdOffset) {
  events.SessionEnd.startSessionEnd(builder);
  events.SessionEnd.addUserId(builder, userIdOffset);
  return events.SessionEnd.endSessionEnd(builder);
}

/**
 * @constructor
 */
events.Event = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {events.Event}
 */
events.Event.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.Event=} obj
 * @returns {events.Event}
 */
events.Event.getRootAsEvent = function(bb, obj) {
  return (obj || new events.Event).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {events.Event=} obj
 * @returns {events.Event}
 */
events.Event.getSizePrefixedRootAsEvent = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new events.Event).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {events.Cmd=} obj
 * @returns {events.Cmd|null}
 */
events.Event.prototype.Command = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new events.Cmd).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @returns {events.Data}
 */
events.Event.prototype.PayloadType = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? /** @type {events.Data} */ (this.bb.readUint8(this.bb_pos + offset)) : events.Data.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
events.Event.prototype.Payload = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
events.Event.startEvent = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} CommandOffset
 */
events.Event.addCommand = function(builder, CommandOffset) {
  builder.addFieldOffset(0, CommandOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {events.Data} PayloadType
 */
events.Event.addPayloadType = function(builder, PayloadType) {
  builder.addFieldInt8(1, PayloadType, events.Data.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} PayloadOffset
 */
events.Event.addPayload = function(builder, PayloadOffset) {
  builder.addFieldOffset(2, PayloadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
events.Event.endEvent = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
events.Event.finishEventBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
events.Event.finishSizePrefixedEventBuffer = function(builder, offset) {
  builder.finish(offset, undefined, true);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} CommandOffset
 * @param {events.Data} PayloadType
 * @param {flatbuffers.Offset} PayloadOffset
 * @returns {flatbuffers.Offset}
 */
events.Event.createEvent = function(builder, CommandOffset, PayloadType, PayloadOffset) {
  events.Event.startEvent(builder);
  events.Event.addCommand(builder, CommandOffset);
  events.Event.addPayloadType(builder, PayloadType);
  events.Event.addPayload(builder, PayloadOffset);
  return events.Event.endEvent(builder);
}

// Exports for Node.js and RequireJS
this.events = events;