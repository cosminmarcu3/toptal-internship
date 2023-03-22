import { createElement, Component } from 'react';
import { Field } from 'react-final-form';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var ExternallyChangedState =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ExternallyChangedState, _React$Component);

  function ExternallyChangedState(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      previous: props.input.value,
      externallyChanged: false
    };
    return _this;
  }

  var _proto = ExternallyChangedState.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var _this$props = this.props,
        value = _this$props.input.value,
        active = _this$props.meta.active;
    var previous = this.state.previous;

    if (value !== previous) {
      this.setState({
        previous: value,
        externallyChanged: !active
      });
    }
  };

  _proto.render = function render() {
    return this.props.children(this.state.externallyChanged);
  };

  return ExternallyChangedState;
}(Component);

var ExternallyChanged = function ExternallyChanged(_ref) {
  var name = _ref.name,
      children = _ref.children;
  return createElement(Field, {
    name: name,
    subscription: {
      active: true,
      value: true
    },
    allowNull: true,
    render: function render(props) {
      return createElement(ExternallyChangedState, _extends({}, props, {
        children: children
      }));
    }
  });
};

var OnBlurState =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(OnBlurState, _React$Component);

  function OnBlurState(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      previous: !!props.meta.active
    };
    return _this;
  }

  var _proto = OnBlurState.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var _this$props = this.props,
        children = _this$props.children,
        active = _this$props.meta.active;
    var previous = this.state.previous;

    if (previous && !active) {
      children();
    }

    if (previous !== active) {
      this.setState({
        previous: active
      });
    }
  };

  _proto.render = function render() {
    return null;
  };

  return OnBlurState;
}(Component);

var OnBlur = function OnBlur(_ref) {
  var name = _ref.name,
      children = _ref.children;
  return createElement(Field, {
    name: name,
    subscription: {
      active: true
    },
    render: function render(props) {
      return createElement(OnBlurState, _extends({}, props, {
        children: children
      }));
    }
  });
};

var OnChangeState =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(OnChangeState, _React$Component);

  function OnChangeState(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      previous: props.input.value
    };
    return _this;
  }

  var _proto = OnChangeState.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var _this$props = this.props,
        children = _this$props.children,
        value = _this$props.input.value;
    var previous = this.state.previous;

    if (value !== previous) {
      this.setState({
        previous: value
      });
      children(value, previous);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return OnChangeState;
}(Component);

var OnChange = function OnChange(_ref) {
  var name = _ref.name,
      children = _ref.children;
  return createElement(Field, {
    name: name,
    subscription: {
      value: true
    },
    allowNull: true,
    render: function render(props) {
      return createElement(OnChangeState, _extends({}, props, {
        children: children
      }));
    }
  });
};

var OnFocusState =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(OnFocusState, _React$Component);

  function OnFocusState(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      previous: !!props.meta.active
    };
    return _this;
  }

  var _proto = OnFocusState.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var _this$props = this.props,
        children = _this$props.children,
        active = _this$props.meta.active;
    var previous = this.state.previous;

    if (active && !previous) {
      this.setState({
        previous: active
      });
      children();
    } else if (!active && previous) {
      this.setState({
        previous: active
      });
    }
  };

  _proto.render = function render() {
    return null;
  };

  return OnFocusState;
}(Component);

var OnFocus = function OnFocus(_ref) {
  var name = _ref.name,
      children = _ref.children;
  return createElement(Field, {
    name: name,
    subscription: {
      active: true
    },
    render: function render(props) {
      return createElement(OnFocusState, _extends({}, props, {
        children: children
      }));
    }
  });
};

export { ExternallyChanged, OnBlur, OnChange, OnFocus };
