'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('mounted');

            try {
                var countStr = localStorage.getItem('count');
                var count = parseInt(countStr, 10);
                console.log('Count from localStorage as an integer ' + count);
                if (!isNaN(count)) this.setState(function () {
                    return { count: count };
                });
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            console.log('update');

            if (prevState.count != this.state.count) {
                console.log('component state changed');
                localStorage.setItem('count', this.state.count);
            } else console.log('no change to component state');
        }
    }]);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handlePlusOne = _this.handlePlusOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);

        _this.state = { count: props.count };
        return _this;
    }

    _createClass(Counter, [{
        key: 'handlePlusOne',
        value: function handlePlusOne() {

            this.setState(function (prevState) {
                console.log(prevState.count);
                var newCount = prevState.count + 1;
                return { count: newCount };
            });
        }
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {

            this.setState(function (prevState) {
                console.log(prevState.count);
                var newCount = prevState.count ? prevState.count - 1 : 0;
                return { count: newCount };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {

            this.setState(function () {
                return { count: 0 };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    ' Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handlePlusOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

Counter.defaultProps = {
    count: 0
};

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(Counter, { count: 2 }), appRoot);
