import {StyleSheet, Platform} from 'react-native';
import Colors from '../../constants/Colors';

export const CELL_HEIGHT = 54;
export const CELL_WIDTH = 40;
export const CELL_BORDER_RADIUS = 10;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = Colors.dark.oceanBlue;
export const ACTIVE_CELL_BG_COLOR = '#fff';

const styles = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_HEIGHT,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_HEIGHT,
    width: CELL_WIDTH,
    lineHeight: CELL_HEIGHT - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 22,
    textAlign: 'center',
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: CELL_BORDER_RADIUS,
    backgroundColor: '#fff',

    // IOS

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    minHeight: 800,
    padding: 20,
  },
  title: {
    paddingTop: 50,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: '#000',
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 60,
    height: 60,
    backgroundColor: '#3557b7',
    justifyContent: 'center',
    minWidth: 300,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});

export default styles;
