/** 包依赖参数 */
export type packageParam = '--diff' | '--upDependencies';

/** dns 可用参数 */
export type dnsParam = '--domain' | '--port' | '--not-covered' | '--rrtype';

/**  移除文件/目录参数 */
export type removeParam = '--ignore' | '--subdirectories';

export type ArgsArrMapItemList = {
  package: packageParam;
  dns: dnsParam;
  clearScreen: undefined;
  clearTerminal: undefined;
  remove: removeParam;
  runOtherCode: undefined;
};
