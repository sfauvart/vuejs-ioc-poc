let services = new Map();
let properties;

let config = {
  http: {
    src: import('axios'),
    function: 'create',
    functionArgs: [],
  },
  myAPI: {
    src: import(`@app/api/${process.env.VUE_APP_API_CLIENT_IMPL}`),
    function: 'default',
    functionArgs: [{axios:'@@http', baseURL:process.env.VUE_APP_API_BASE_URL}]
  },
};

function replaceArgs(args) {
  for( var property in args ) {
    if (typeof property === 'string' && args[property].startsWith('@@', 0)) {
      const serviceName = args[property].substr(2);
      if (services.has(serviceName)) {
        args[property] = services.get(serviceName);
      } else {
        throw new Error(`service ${serviceName} not found!`)
      }
    }
  }
  return args;
}

async function initServices() {
  for (const key of Object.keys(config)) {
    await config[key].src.then(
      (a) => {
        let args = config[key].functionArgs;
        if (args.length > 0) {
          args[0] = replaceArgs(args[0]);
        }
        services.set(key, a[config[key].function](...args));
    });
  }
}

async function initProperties() {
  return {
  };
}

export async function getProperties (key) {
  if (!properties) {
    properties = await initProperties();
  }

  return properties[key];
}

export async function getServices(key) {
  if (!services.has(key)) {
    await initServices();
  }
  return services.get(key);
}

class Container {
}

export default Container;
