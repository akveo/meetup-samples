import 'es6-symbol/implement';
import { AppRegistry, YellowBox } from 'react-native';
import { name as appName } from './app.json';
import { AppContainer } from './app/app.container';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Setting a timer']);

AppRegistry.registerComponent(appName, () => AppContainer);