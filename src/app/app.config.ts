import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
declare var require: any

@Injectable()
export class AppConfig {
  // private ENV = 'local'
  private ENV = 'dev'
  // private ENV = 'alpha'
  // private ENV = 'alpha-dev'

  public SETTINGS = {
    DEBUG_MODE: false,
    UPDATES: false,
    DEBUG_LOGIN: false,
    APP_VERSION: require('../../package.json').version,
  }

  public API_BASE = ''
  public FIREBASE_ENV = ''

  constructor(public http: Http) {
    this.configEnv()
  }

  public env(env: string) {
    return env === this.ENV
  }

  private configEnv() {
    if (this.env('local')) {
      this.API_BASE = 'http://localhost:3001/api/'
      this.FIREBASE_ENV = 'development'
      this.SETTINGS.DEBUG_LOGIN = true
      this.SETTINGS.DEBUG_MODE = true
    }

    if (this.env('dev')) {
      this.API_BASE = 'https://fluent-api-dev.herokuapp.com/api/'
      this.FIREBASE_ENV = 'aws-dev'
      this.SETTINGS.DEBUG_LOGIN = true
      this.SETTINGS.DEBUG_MODE = true
    }

    if (this.env('alpha')) {
      this.API_BASE = 'https://fluent-api-alpha.herokuapp.com/api/'
      this.FIREBASE_ENV = 'alpha'
      this.SETTINGS.DEBUG_LOGIN = false
      this.SETTINGS.DEBUG_MODE = false
      window.console.log = function() {}
    }
  }
}
