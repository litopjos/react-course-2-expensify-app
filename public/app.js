'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };

        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);

        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption() {
            console.log('hey there');
            alert('delete one option');
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            console.log(option);

            if (!option) {
                return 'You must enter a valid option';
            } else if (this.state.options.indexOf(option) != -1) {
                return 'This option already exists.';
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var index = Math.floor(Math.random() * this.state.options.length);
            var decision = this.state.options[index];
            alert(decision);
        }
    }, {
        key: 'render',
        value: function render() {

            var subtitle = "Put your life in the hands of a computer";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { h: true }),
                React.createElement(Action, {
                    handlePick: this.handlePick,
                    hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, {
                    handleRemoveAll: this.handleRemoveAll,
                    handleDeleteOption: this.handleDeleteOption,
                    options: this.state.options
                }),
                React.createElement(AddOptions, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle,
            '  '
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                disabled: !props.hasOptions,
                onClick: props.handlePick },
            'What Should I Do??'
        )
    );
};

var Options = function Options(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'p',
            null,
            'Options component'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optiontext: option, handleDeleteOption: props.handleDeleteOption });
        })
    );
};

function foo2() {
    alert('foo3');
}

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            props.optiontext
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    props.handleDeleteOption();
                } },
            ' Remove '
        )
    );
};

function foo1(message) {
    alert(message);
}

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);

        _this2.state = { error: undefined };

        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();

            if (option) {
                var error = this.props.handleAddOption(option);

                this.setState(function () {
                    return { error: error };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    'Error: ',
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

var jsx = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Title'
    )
);

ReactDOM.render(React.createElement(IndecisionApp, { options: ['one', 'two'] }), document.getElementById('app'));
