// @flow
import { AUTOCOMPLETE_THEME_API } from './autocomplete';
import { BUBBLE_THEME_API } from './bubble';
import { BUTTON_THEME_API } from './button';
import { CHECKBOX_THEME_API } from './checkbox';
import { FORM_FIELD_THEME_API } from './formfield';
import { INPUT_THEME_API } from './input';
import { MODAL_THEME_API } from './modal';
import { OPTIONS_THEME_API } from './options';
import { PROGRESS_BAR_THEME_API } from './progressbar';
import { RADIO_THEME_API } from './radio';
import { SELECT_THEME_API } from './select';
import { SWITCH_THEME_API } from './switch';
import { TEXT_AREA_THEME_API } from './textarea';
import { TOGGLER_THEME_API } from './toggler';
import { TOOLTIP_THEME_API } from './tooltip';

export const IDENTIFIERS = {
  AUTOCOMPLETE: 'autocomplete',
  BUBBLE: 'bubble',
  BUTTON: 'button',
  CHECKBOX: 'checkbox',
  FORM_FIELD: 'formfield',
  INPUT: 'input',
  MODAL: 'modal',
  OPTIONS: 'options',
  PROGRESS_BAR: 'progressbar',
  RADIO: 'radio',
  SELECT: 'select',
  SWITCH: 'switch',
  TEXT_AREA: 'textarea',
  TOGGLER: 'toggler',
  TOOLTIP: 'tooltip'
};

export const ROOT_THEME_API = {
  [IDENTIFIERS.AUTOCOMPLETE]: AUTOCOMPLETE_THEME_API,
  [IDENTIFIERS.BUBBLE]: BUBBLE_THEME_API,
  [IDENTIFIERS.BUTTON]: BUTTON_THEME_API,
  [IDENTIFIERS.CHECKBOX]: CHECKBOX_THEME_API,
  [IDENTIFIERS.FORM_FIELD]: FORM_FIELD_THEME_API,
  [IDENTIFIERS.INPUT]: INPUT_THEME_API,
  [IDENTIFIERS.MODAL]: MODAL_THEME_API,
  [IDENTIFIERS.OPTIONS]: OPTIONS_THEME_API,
  [IDENTIFIERS.PROGRESS_BAR]: PROGRESS_BAR_THEME_API,
  [IDENTIFIERS.RADIO]: RADIO_THEME_API,
  [IDENTIFIERS.SELECT]: SELECT_THEME_API,
  [IDENTIFIERS.SWITCH]: SWITCH_THEME_API,
  [IDENTIFIERS.TEXT_AREA]: TEXT_AREA_THEME_API,
  [IDENTIFIERS.TOGGLER]: TOGGLER_THEME_API,
  [IDENTIFIERS.TOOLTIP]: TOOLTIP_THEME_API
};
