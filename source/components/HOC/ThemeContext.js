// @flow
import React from 'react';
import createReactContext, { type Context } from 'create-react-context';
import { ROOT_THEME_API } from '../../themes/API';
import { SimpleTheme } from '../../themes/simple/';

// components that are NOT directly nested within a ThemeProvider
// can access simple theme as "this.props.context.theme",
// same goes for "this.props.context.ROOT_THEME_API"
// if the user passes ThemeProvider a theme and/or ROOT_THEME_API,
// these default values are overwritten

// check to use context pollyfill or not
let createContext;
if (React.createContext) {
  // React module contains createContext method, no polyfill
  createContext = React.createContext;
} else {
  // use create-react-context polyfill
  createContext = createReactContext;
}

type Theme = {
  theme: Object,
  ROOT_THEME_API: Object
};

const defaultContext = { theme: SimpleTheme, ROOT_THEME_API };

export const ThemeContext: Context<Theme> = createContext(defaultContext);
