import { MainRuntime } from '@teambit/cli';
import { MyDevFilesAspect } from './my-dev-files.aspect';

export class MyDevFilesMain {
  // your aspect API goes here.
  getSomething() {}

  static slots = [];
  // define your aspect dependencies here.
  // in case you need to use another aspect API.
  static dependencies = [];

  static runtime = MainRuntime;

  static async provider() {
    return new MyDevFilesMain();
  }
}

MyDevFilesAspect.addRuntime(MyDevFilesMain);

export default MyDevFilesMain;
