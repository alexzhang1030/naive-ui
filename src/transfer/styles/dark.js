import create from '../../_styles/utils/create-component-base'
import commonVariables from './_common'
import { baseDark } from '../../_styles/base'
import { checkboxDark } from '../../checkbox'
import { scrollbarDark } from '../../scrollbar'
import { inputDark } from '../../input'

export default create({
  theme: 'dark',
  name: 'Transfer',
  peer: [
    baseDark,
    checkboxDark,
    scrollbarDark,
    inputDark
  ],
  getLocalVars (vars) {
    return {
      ...commonVariables,
      borderRadius: vars.borderRadius,
      borderColor: 'transparent',
      listColor: vars.inputColorOverlay,
      headerColor: vars.tableHeaderColorOverlay,
      headerTextColor: vars.textColor1Overlay,
      headerTextColorDisabled: vars.textColorDisabledOverlay,
      headerExtraTextColor: vars.textColor2Overlay,
      filterBorderColor: vars.borderColorOverlay,
      itemTextColor: vars.textColor2Overlay,
      itemTextColorDisabled: vars.textColorDisabledOverlay,
      itemColorPending: vars.hoverColorOverlay
    }
  }
})
