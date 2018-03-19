module global {
    /**
   * 自定义事件基类
   */
	export class BaseEventDispatcher extends Laya.EventDispatcher {
		private static _instance: BaseEventDispatcher;
		public constructor() {
			super();
		}

		public static getInstance(): BaseEventDispatcher {
			if (this._instance == null) {
				this._instance = new BaseEventDispatcher();
			}
			return this._instance;
		}
	}
}