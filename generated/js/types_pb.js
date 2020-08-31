// source: types.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Balance', null, global);
goog.exportSymbol('proto.BalanceWithFee', null, global);
goog.exportSymbol('proto.Fee', null, global);
goog.exportSymbol('proto.Market', null, global);
goog.exportSymbol('proto.MarketWithFee', null, global);
goog.exportSymbol('proto.Price', null, global);
goog.exportSymbol('proto.PriceWithFee', null, global);
goog.exportSymbol('proto.TradeType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Fee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Fee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Fee.displayName = 'proto.Fee';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Balance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Balance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Balance.displayName = 'proto.Balance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BalanceWithFee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BalanceWithFee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BalanceWithFee.displayName = 'proto.BalanceWithFee';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Market = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Market, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Market.displayName = 'proto.Market';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MarketWithFee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MarketWithFee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MarketWithFee.displayName = 'proto.MarketWithFee';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Price = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Price, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Price.displayName = 'proto.Price';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PriceWithFee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PriceWithFee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PriceWithFee.displayName = 'proto.PriceWithFee';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Fee.prototype.toObject = function(opt_includeInstance) {
  return proto.Fee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Fee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Fee.toObject = function(includeInstance, msg) {
  var f, obj = {
    asset: jspb.Message.getFieldWithDefault(msg, 1, ""),
    basisPoint: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Fee}
 */
proto.Fee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Fee;
  return proto.Fee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Fee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Fee}
 */
proto.Fee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBasisPoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Fee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Fee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Fee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Fee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBasisPoint();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string asset = 1;
 * @return {string}
 */
proto.Fee.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Fee} returns this
 */
proto.Fee.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 basis_point = 2;
 * @return {number}
 */
proto.Fee.prototype.getBasisPoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Fee} returns this
 */
proto.Fee.prototype.setBasisPoint = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Balance.prototype.toObject = function(opt_includeInstance) {
  return proto.Balance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Balance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Balance.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseAmount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    quoteAmount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Balance}
 */
proto.Balance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Balance;
  return proto.Balance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Balance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Balance}
 */
proto.Balance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBaseAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuoteAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Balance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Balance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Balance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Balance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseAmount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getQuoteAmount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 base_amount = 1;
 * @return {number}
 */
proto.Balance.prototype.getBaseAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Balance} returns this
 */
proto.Balance.prototype.setBaseAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 quote_amount = 2;
 * @return {number}
 */
proto.Balance.prototype.getQuoteAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Balance} returns this
 */
proto.Balance.prototype.setQuoteAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BalanceWithFee.prototype.toObject = function(opt_includeInstance) {
  return proto.BalanceWithFee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BalanceWithFee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BalanceWithFee.toObject = function(includeInstance, msg) {
  var f, obj = {
    balance: (f = msg.getBalance()) && proto.Balance.toObject(includeInstance, f),
    fee: (f = msg.getFee()) && proto.Fee.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BalanceWithFee}
 */
proto.BalanceWithFee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BalanceWithFee;
  return proto.BalanceWithFee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BalanceWithFee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BalanceWithFee}
 */
proto.BalanceWithFee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Balance;
      reader.readMessage(value,proto.Balance.deserializeBinaryFromReader);
      msg.setBalance(value);
      break;
    case 2:
      var value = new proto.Fee;
      reader.readMessage(value,proto.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BalanceWithFee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BalanceWithFee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BalanceWithFee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BalanceWithFee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Balance.serializeBinaryToWriter
    );
  }
  f = message.getFee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Fee.serializeBinaryToWriter
    );
  }
};


/**
 * optional Balance balance = 1;
 * @return {?proto.Balance}
 */
proto.BalanceWithFee.prototype.getBalance = function() {
  return /** @type{?proto.Balance} */ (
    jspb.Message.getWrapperField(this, proto.Balance, 1));
};


/**
 * @param {?proto.Balance|undefined} value
 * @return {!proto.BalanceWithFee} returns this
*/
proto.BalanceWithFee.prototype.setBalance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.BalanceWithFee} returns this
 */
proto.BalanceWithFee.prototype.clearBalance = function() {
  return this.setBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.BalanceWithFee.prototype.hasBalance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Fee fee = 2;
 * @return {?proto.Fee}
 */
proto.BalanceWithFee.prototype.getFee = function() {
  return /** @type{?proto.Fee} */ (
    jspb.Message.getWrapperField(this, proto.Fee, 2));
};


/**
 * @param {?proto.Fee|undefined} value
 * @return {!proto.BalanceWithFee} returns this
*/
proto.BalanceWithFee.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.BalanceWithFee} returns this
 */
proto.BalanceWithFee.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.BalanceWithFee.prototype.hasFee = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Market.prototype.toObject = function(opt_includeInstance) {
  return proto.Market.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Market} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Market.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseAsset: jspb.Message.getFieldWithDefault(msg, 1, ""),
    quoteAsset: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Market}
 */
proto.Market.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Market;
  return proto.Market.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Market} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Market}
 */
proto.Market.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseAsset(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteAsset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Market.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Market.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Market} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Market.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseAsset();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuoteAsset();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string base_asset = 1;
 * @return {string}
 */
proto.Market.prototype.getBaseAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Market} returns this
 */
proto.Market.prototype.setBaseAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string quote_asset = 2;
 * @return {string}
 */
proto.Market.prototype.getQuoteAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Market} returns this
 */
proto.Market.prototype.setQuoteAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MarketWithFee.prototype.toObject = function(opt_includeInstance) {
  return proto.MarketWithFee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MarketWithFee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MarketWithFee.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && proto.Market.toObject(includeInstance, f),
    fee: (f = msg.getFee()) && proto.Fee.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MarketWithFee}
 */
proto.MarketWithFee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MarketWithFee;
  return proto.MarketWithFee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MarketWithFee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MarketWithFee}
 */
proto.MarketWithFee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Market;
      reader.readMessage(value,proto.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new proto.Fee;
      reader.readMessage(value,proto.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MarketWithFee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MarketWithFee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MarketWithFee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MarketWithFee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Market.serializeBinaryToWriter
    );
  }
  f = message.getFee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Fee.serializeBinaryToWriter
    );
  }
};


/**
 * optional Market market = 1;
 * @return {?proto.Market}
 */
proto.MarketWithFee.prototype.getMarket = function() {
  return /** @type{?proto.Market} */ (
    jspb.Message.getWrapperField(this, proto.Market, 1));
};


/**
 * @param {?proto.Market|undefined} value
 * @return {!proto.MarketWithFee} returns this
*/
proto.MarketWithFee.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MarketWithFee} returns this
 */
proto.MarketWithFee.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MarketWithFee.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Fee fee = 2;
 * @return {?proto.Fee}
 */
proto.MarketWithFee.prototype.getFee = function() {
  return /** @type{?proto.Fee} */ (
    jspb.Message.getWrapperField(this, proto.Fee, 2));
};


/**
 * @param {?proto.Fee|undefined} value
 * @return {!proto.MarketWithFee} returns this
*/
proto.MarketWithFee.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MarketWithFee} returns this
 */
proto.MarketWithFee.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MarketWithFee.prototype.hasFee = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Price.prototype.toObject = function(opt_includeInstance) {
  return proto.Price.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Price} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Price.toObject = function(includeInstance, msg) {
  var f, obj = {
    basePrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    quotePrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Price}
 */
proto.Price.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Price;
  return proto.Price.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Price} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Price}
 */
proto.Price.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBasePrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setQuotePrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Price.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Price.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Price} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Price.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasePrice();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getQuotePrice();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float base_price = 1;
 * @return {number}
 */
proto.Price.prototype.getBasePrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Price} returns this
 */
proto.Price.prototype.setBasePrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float quote_price = 2;
 * @return {number}
 */
proto.Price.prototype.getQuotePrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Price} returns this
 */
proto.Price.prototype.setQuotePrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PriceWithFee.prototype.toObject = function(opt_includeInstance) {
  return proto.PriceWithFee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PriceWithFee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PriceWithFee.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: (f = msg.getPrice()) && proto.Price.toObject(includeInstance, f),
    fee: (f = msg.getFee()) && proto.Fee.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PriceWithFee}
 */
proto.PriceWithFee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PriceWithFee;
  return proto.PriceWithFee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PriceWithFee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PriceWithFee}
 */
proto.PriceWithFee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Price;
      reader.readMessage(value,proto.Price.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 2:
      var value = new proto.Fee;
      reader.readMessage(value,proto.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PriceWithFee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PriceWithFee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PriceWithFee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PriceWithFee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Price.serializeBinaryToWriter
    );
  }
  f = message.getFee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Fee.serializeBinaryToWriter
    );
  }
};


/**
 * optional Price price = 1;
 * @return {?proto.Price}
 */
proto.PriceWithFee.prototype.getPrice = function() {
  return /** @type{?proto.Price} */ (
    jspb.Message.getWrapperField(this, proto.Price, 1));
};


/**
 * @param {?proto.Price|undefined} value
 * @return {!proto.PriceWithFee} returns this
*/
proto.PriceWithFee.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PriceWithFee} returns this
 */
proto.PriceWithFee.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PriceWithFee.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Fee fee = 2;
 * @return {?proto.Fee}
 */
proto.PriceWithFee.prototype.getFee = function() {
  return /** @type{?proto.Fee} */ (
    jspb.Message.getWrapperField(this, proto.Fee, 2));
};


/**
 * @param {?proto.Fee|undefined} value
 * @return {!proto.PriceWithFee} returns this
*/
proto.PriceWithFee.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PriceWithFee} returns this
 */
proto.PriceWithFee.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PriceWithFee.prototype.hasFee = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.TradeType = {
  BUY: 0,
  SELL: 1
};

goog.object.extend(exports, proto);
