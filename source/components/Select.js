// @flow
import React, { Component } from 'react';
import type { ComponentType, Element } from 'react';
import createRef from 'create-react-ref/lib/createRef';

// internal components
import { GlobalListeners } from './HOC/GlobalListeners';

// internal utility functions
import { createEmptyContext, withTheme } from './HOC/withTheme';
import { composeTheme, addThemeId, didThemePropsChange } from '../utils/themes';

// import constants
import { IDENTIFIERS } from '.';
import type { ThemeContextProp } from './HOC/withTheme';

type Props = {
  allowBlank: boolean,
  autoFocus: boolean,
  className?: string,
  context: ThemeContextProp,
  error?: string | Element<any>,
  label?: string | Element<any>,
  isOpeningUpward: boolean,
  onBlur?: Function,
  onChange?: Function,
  onFocus?: Function,
  optionRenderer?: Function,
  options: Array<any>,
  placeholder?: string,
  skin?: ComponentType<any>,
  theme: ?Object, // will take precedence over theme in context if passed
  themeId: string,
  themeOverrides: Object,
  value: string
};

type State = {
  composedTheme: Object,
  isOpen: boolean
};

class SelectBase extends Component<Props, State> {
  // declare ref types
  rootElement: ?Element<*>;
  inputElement: Element<'input'>;
  optionsElement: ?Element<*>;

  // define static properties
  static displayName = 'Select';
  static defaultProps = {
    allowBlank: true,
    autoFocus: false,
    context: createEmptyContext(),
    isOpeningUpward: false,
    options: [],
    theme: null,
    themeOverrides: {},
    themeId: IDENTIFIERS.SELECT,
    value: ''
  };

  constructor(props: Props) {
    super(props);

    // define ref
    this.rootElement = createRef();
    this.inputElement = createRef();
    this.optionsElement = createRef();

    const { context, themeId, theme, themeOverrides } = props;

    this.state = {
      composedTheme: composeTheme(
        addThemeId(theme || context.theme, themeId),
        addThemeId(themeOverrides, themeId),
        context.ROOT_THEME_API
      ),
      isOpen: false
    };
  }

  componentDidMount() {
    // check for autoFocus of input element
    if (this.props.autoFocus) {
      return this.focus();
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    didThemePropsChange(this.props, nextProps, this.setState.bind(this));
  }

  // ========= PUBLIC SKIN API =========

  // applying focus to the input element will
  // toggle options open because Select's input is read only
  focus = () => this.toggleOpen();

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  handleInputClick = (event: SyntheticMouseEvent<>) => {
    event.stopPropagation();
    event.preventDefault();

    const { inputElement } = this;
    if (inputElement.current && document.activeElement === inputElement.current) {
      inputElement.current.blur();
    }
    this.toggleOpen();
  };

  handleChange = (option: Object, event: SyntheticEvent<>) => {
    // check if the user passed an onChange handler and call it
    if (this.props.onChange) this.props.onChange(option.value, event);
    // onChange is called when an option is selected, so close options
    this.toggleOpen();
  };

  getSelectedOption = () => {
    const { options, value, allowBlank } = this.props;
    for (const option of options) {
      if (option.value === value) return option;
    }
    if (!allowBlank) return options[0];
  };

  render() {
    // destructuring props ensures only the "...rest" get passed down
    const {
      skin,
      theme,
      themeOverrides,
      autoFocus,
      context,
      allowBlank,
      ...rest
    } = this.props;

    const SelectSkin = skin || context.skins[IDENTIFIERS.SELECT];

    return (
      <GlobalListeners
        toggleOpen={this.toggleOpen}
        optionsIsOpen={this.state.isOpen}
        optionsIsOpeningUpward={this.props.isOpeningUpward}
        optionsRef={this.optionsElement}
        rootRef={this.rootElement}
      >
        {({ optionsMaxHeight }) => (
          <SelectSkin
            isOpen={this.state.isOpen}
            rootRef={this.rootElement}
            inputRef={this.inputElement}
            optionsRef={this.optionsElement}
            optionsMaxHeight={optionsMaxHeight}
            theme={this.state.composedTheme}
            getSelectedOption={this.getSelectedOption}
            handleInputClick={this.handleInputClick}
            handleChange={this.handleChange}
            toggleOpen={this.toggleOpen}
            {...rest}
          />
        )}
      </GlobalListeners>
    );
  }
}

export const Select = withTheme(SelectBase);
