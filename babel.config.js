const presets = [
  [
    "@babel/env",
    {
      targets: {
        edges: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1"
      },
      useBuiltsIns: "usage"
    }
  ]
];

module.exports = { presets };

// ./node_modules/.bin/babel src --out-dir lib
//from command line compiles src to lib with settings in mind
