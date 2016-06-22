'use strict';

module.exports = {

  type: 'inline-wrapper',

  matchElement: function(el, converter) {
    var blockConverter = converter._getConverterForElement(el, 'block');
    return Boolean(blockConverter && blockConverter.type !== 'unsupported');
  },

  import: function(el, node, converter) {
    // HACK monkey patching the context
    node.id = converter.nextId('inline-wrapper');
    var state = converter.state;
    node.wrappedNode = converter.convertElement(el).id;
  },

  export: function(node, el, converter) {
    return converter.convertNode(node.wrappedNode);
  }

};