import { AppRegistry, YellowBox } from 'react-native';
import { name as appName } from './app.json';
import { App } from './app/app';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Setting a timer']);

AppRegistry.registerComponent(appName, () => App);