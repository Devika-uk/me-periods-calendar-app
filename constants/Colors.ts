/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
const darkRedColor = '#B90E09';
const redColor = '#DAA520';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: redColor, // <--- Active icon color
    icon: redColor,
    tabIconDefault: redColor, // <--- Inactive icon color
    tabIconSelected: darkRedColor, // <--- Active icon color
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: redColor,
    icon: redColor,
    tabIconDefault: redColor,
    tabIconSelected: darkRedColor,
  },
};
  