System.config({
  "baseURL": ".",
  "transpiler": "babel",
  "babelOptions": {
    "stage": 0
  },
  "paths": {
    "*": "dist/*.js"
  }
});

System.config({
  "map": {
    "aurelia-animator-css": "github:aurelia/animator-css@0.13.0",
    "aurelia-binding": "github:aurelia/binding@0.8.4",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.14.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.2",
    "aurelia-flux": "github:tfrydrychewicz/aurelia-flux@0.1.5",
    "aurelia-framework": "github:aurelia/framework@0.13.3",
    "aurelia-history": "github:aurelia/history@0.6.1",
    "aurelia-history-browser": "github:aurelia/history-browser@0.6.1",
    "aurelia-http-client": "github:aurelia/http-client@0.10.0",
    "aurelia-loader": "github:aurelia/loader@0.8.3",
    "aurelia-loader-default": "github:aurelia/loader-default@0.9.0",
    "aurelia-logging": "github:aurelia/logging@0.6.2",
    "aurelia-logging-console": "github:aurelia/logging-console@0.6.0",
    "aurelia-metadata": "github:aurelia/metadata@0.7.1",
    "aurelia-path": "github:aurelia/path@0.8.1",
    "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.1",
    "aurelia-router": "github:aurelia/router@0.10.3",
    "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
    "aurelia-templating": "github:aurelia/templating@0.13.15",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.0",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.0",
    "aurelia-templating-router": "github:aurelia/templating-router@0.14.0",
    "aurelia-validation": "github:aurelia/validation@0.2.6",
    "babel": "npm:babel-core@5.6.15",
    "babel-runtime": "npm:babel-runtime@5.4.7",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.13",
    "font-awesome": "npm:font-awesome@4.3.0",
    "lodash": "npm:lodash@3.10.0",
    "nprogress": "github:rstacruz/nprogress@0.2.0",
    "tfrydrychewicz/aurelia-flux": "github:tfrydrychewicz/aurelia-flux@0.1.5",
    "github:aurelia/animator-css@0.13.0": {
      "aurelia-templating": "github:aurelia/templating@0.13.15"
    },
    "github:aurelia/binding@0.8.4": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.14.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.2",
      "aurelia-framework": "github:aurelia/framework@0.13.3",
      "aurelia-history": "github:aurelia/history@0.6.1",
      "aurelia-history-browser": "github:aurelia/history-browser@0.6.1",
      "aurelia-loader-default": "github:aurelia/loader-default@0.9.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.6.0",
      "aurelia-router": "github:aurelia/router@0.10.3",
      "aurelia-templating": "github:aurelia/templating@0.13.15",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.14.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.9.1": {
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.6.2": {
      "aurelia-logging": "github:aurelia/logging@0.6.2"
    },
    "github:aurelia/framework@0.13.3": {
      "aurelia-binding": "github:aurelia/binding@0.8.4",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-loader": "github:aurelia/loader@0.8.3",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "aurelia-templating": "github:aurelia/templating@0.13.15",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.6.1": {
      "aurelia-history": "github:aurelia/history@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/http-client@0.10.0": {
      "aurelia-path": "github:aurelia/path@0.8.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.9.0": {
      "aurelia-loader": "github:aurelia/loader@0.8.3",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1"
    },
    "github:aurelia/loader@0.8.3": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "core-js": "npm:core-js@0.9.18",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/metadata@0.7.1": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/route-recognizer@0.6.1": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.10.3": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.2",
      "aurelia-history": "github:aurelia/history@0.6.1",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-binding@0.13.0": {
      "aurelia-binding": "github:aurelia/binding@0.8.4",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-templating": "github:aurelia/templating@0.13.15"
    },
    "github:aurelia/templating-resources@0.13.0": {
      "aurelia-binding": "github:aurelia/binding@0.8.4",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "aurelia-templating": "github:aurelia/templating@0.13.15",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.14.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-router": "github:aurelia/router@0.10.3",
      "aurelia-templating": "github:aurelia/templating@0.13.15"
    },
    "github:aurelia/templating@0.13.15": {
      "aurelia-binding": "github:aurelia/binding@0.8.4",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.8.3",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/validation@0.2.6": {
      "aurelia-binding": "github:aurelia/binding@0.8.4",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-templating": "github:aurelia/templating@0.13.15"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:rstacruz/nprogress@0.2.0": {
      "css": "github:systemjs/plugin-css@0.1.13"
    },
    "github:tfrydrychewicz/aurelia-flux@0.1.5": {
      "aurelia-binding": "github:aurelia/binding@0.8.4",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-router": "github:aurelia/router@0.10.3",
      "aurelia-templating": "github:aurelia/templating@0.13.15",
      "bluebird": "npm:bluebird@2.9.34",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:bluebird@2.9.34": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.3.0": {
      "css": "github:systemjs/plugin-css@0.1.13"
    },
    "npm:lodash@3.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

