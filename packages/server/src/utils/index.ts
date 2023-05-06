import { ProjectEnv } from "@anchor/typings/enum";

export class CommonUtils {
  private constructor() {}

  static getProjectEnv() {
    return (process.env.NODE_ENV ?? ProjectEnv.PROD) as ProjectEnv;
  }
}
